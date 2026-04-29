// 主交互逻辑

// DOM元素
const screens = {
    title: document.getElementById('title-screen'),
    characterSelect: document.getElementById('character-select'),
    game: document.getElementById('game-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    backBtn: document.getElementById('back-btn'),
    characterList: document.getElementById('character-list'),
    storyText: document.getElementById('story-text'),
    choicesPanel: document.getElementById('choices-panel'),
    cheatList: document.getElementById('cheat-list'),
    stats: {
        charm: { bar: document.getElementById('charm-bar'), value: document.getElementById('charm-value') },
        intelligence: { bar: document.getElementById('intelligence-bar'), value: document.getElementById('intelligence-value') },
        wealth: { bar: document.getElementById('wealth-bar'), value: document.getElementById('wealth-value') },
        strength: { bar: document.getElementById('strength-bar'), value: document.getElementById('strength-value') }
    }
};

// 初始化
function init() {
    // 开始按钮
    elements.startBtn.addEventListener('click', () => {
        showScreen('characterSelect');
        renderCharacterList();
    });

    // 返回按钮
    elements.backBtn.addEventListener('click', () => {
        if (confirm('确定要返回主菜单吗？当前进度将丢失。')) {
            game.reset();
            showScreen('title');
        }
    });
}

// 显示指定屏幕
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// 渲染角色列表
function renderCharacterList() {
    elements.characterList.innerHTML = '';
    
    gameData.characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description}</p>
            <div style="margin-top: 15px; font-size: 0.9em; color: #6c5ce7;">
                <strong>金手指：</strong>${character.cheats.join('、')}
            </div>
        `;
        
        card.addEventListener('click', () => {
            startGame(character.id);
        });
        
        elements.characterList.appendChild(card);
    });
}

// 开始游戏
function startGame(characterId) {
    if (game.initGame(characterId)) {
        showScreen('game');
        updateStats();
        updateCheats();
        renderCurrentNode();
    }
}

// 更新属性显示
function updateStats() {
    const stats = game.currentState.stats;
    
    Object.keys(elements.stats).forEach(stat => {
        const value = stats[stat];
        const percentage = stat === 'wealth' ? Math.min(100, value / 10) : value;
        
        elements.stats[stat].bar.style.width = percentage + '%';
        elements.stats[stat].value.textContent = value;
    });
}

// 更新金手指显示
function updateCheats() {
    elements.cheatList.innerHTML = '';
    
    game.currentState.cheats.forEach(cheat => {
        const tag = document.createElement('div');
        tag.className = 'cheat-tag';
        tag.textContent = cheat;
        elements.cheatList.appendChild(tag);
    });
}

// 渲染当前剧情节点
function renderCurrentNode() {
    const node = game.getCurrentNode();
    
    if (!node) {
        console.error('无法获取剧情节点');
        return;
    }

    // 渲染剧情文本
    elements.storyText.innerHTML = formatStoryText(node.text);
    
    // 渲染选项按钮
    elements.choicesPanel.innerHTML = '';
    
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            
            btn.addEventListener('click', () => {
                handleChoice(index);
            });
            
            elements.choicesPanel.appendChild(btn);
        });
    } else {
        // 结局节点
        const endBtn = document.createElement('button');
        endBtn.className = 'choice-btn';
        endBtn.textContent = '返回主菜单';
        endBtn.addEventListener('click', () => {
            game.reset();
            showScreen('title');
        });
        elements.choicesPanel.appendChild(endBtn);
    }
    
    // 滚动到顶部
    document.getElementById('story-panel').scrollTop = 0;
}

// 格式化剧情文本
function formatStoryText(text) {
    // 将换行符转换为HTML段落
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map(p => {
        // 系统提示特殊样式
        if (p.includes('【叮！') || p.includes('【系统')) {
            return `<div class="comic-bubble">${p.replace(/\n/g, '<br>')}</div>`;
        }
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');
}

// 处理选择
function handleChoice(choiceIndex) {
    const result = game.makeChoice(choiceIndex);
    
    if (result.success) {
        updateStats();
        renderCurrentNode();
        
        // 检查是否到达结局
        if (game.isEnding()) {
            setTimeout(() => {
                alert('🎉 恭喜达成结局！');
            }, 500);
        }
    } else {
        alert(result.message);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
