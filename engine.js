// 游戏引擎核心逻辑

class GameEngine {
    constructor() {
        this.currentState = {
            character: null,
            stats: { charm: 50, intelligence: 50, wealth: 50, strength: 50 },
            currentNode: null,
            cheats: [],
            history: []
        };
    }

    // 初始化游戏
    initGame(characterId) {
        const character = gameData.characters.find(c => c.id === characterId);
        if (!character) {
            console.error('角色不存在:', characterId);
            return false;
        }

        this.currentState.character = character;
        this.currentState.stats = { ...character.initialStats };
        this.currentState.cheats = [...character.cheats];
        this.currentState.currentNode = character.startNode;
        this.currentState.history = [];

        return true;
    }

    // 获取当前剧情节点
    getCurrentNode() {
        return gameData.storyNodes[this.currentState.currentNode];
    }

    // 做出选择
    makeChoice(choiceIndex) {
        const node = this.getCurrentNode();
        if (!node || !node.choices || choiceIndex < 0 || choiceIndex >= node.choices.length) {
            console.error('无效的选择');
            return false;
        }

        const choice = node.choices[choiceIndex];
        
        // 检查属性要求(如果有)
        if (choice.statCheck) {
            const { stat, value } = choice.statCheck;
            if (this.currentState.stats[stat] < value) {
                return { success: false, message: `需要${stat}达到${value}才能执行此操作` };
            }
        }

        // 记录历史
        this.currentState.history.push({
            node: this.currentState.currentNode,
            choice: choice.text
        });

        // 更新节点
        this.currentState.currentNode = choice.nextNode;

        // 应用属性变化(从文本中解析)
        this.applyStatChanges(node.text);

        return { success: true, nextNode: this.getCurrentNode() };
    }

    // 从文本中解析属性变化
    applyStatChanges(text) {
        const patterns = [
            /【.*?(\w+)\s+([+-]\d+).*?】/g,
            /(\w+)\s+([+-]\d+)/g
        ];

        for (const pattern of patterns) {
            let match;
            while ((match = pattern.exec(text)) !== null) {
                const stat = this.mapStatName(match[1]);
                const change = parseInt(match[2]);
                
                if (stat && this.currentState.stats.hasOwnProperty(stat)) {
                    this.currentState.stats[stat] += change;
                    // 限制属性范围在0-100之间(财富可以超过100)
                    if (stat !== 'wealth') {
                        this.currentState.stats[stat] = Math.max(0, Math.min(100, this.currentState.stats[stat]));
                    } else {
                        this.currentState.stats[stat] = Math.max(0, this.currentState.stats[stat]);
                    }
                }
            }
        }
    }

    // 映射属性名称
    mapStatName(name) {
        const mapping = {
            '魅力': 'charm',
            '智力': 'intelligence',
            '财富': 'wealth',
            '武力': 'strength'
        };
        return mapping[name] || name;
    }

    // 获取当前状态
    getState() {
        return { ...this.currentState };
    }

    // 重置游戏
    reset() {
        this.currentState = {
            character: null,
            stats: { charm: 50, intelligence: 50, wealth: 50, strength: 50 },
            currentNode: null,
            cheats: [],
            history: []
        };
    }

    // 检查是否到达结局
    isEnding() {
        const node = this.getCurrentNode();
        return node && node.choices && node.choices.some(c => c.nextNode === null);
    }
}

// 创建全局游戏引擎实例
const game = new GameEngine();
