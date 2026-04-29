// 游戏数据结构 - 重生单元剧剧情库

const gameData = {
    // 角色列表
    characters: [
        {
            id: 'ceo',
            name: '霸道总裁',
            description: '重生为掌控全球经济命脉的超级霸总,开局就有万亿资产',
            initialStats: { charm: 80, intelligence: 75, wealth: 100, strength: 40 },
            cheats: ['钞能力', '商业预知', '魅力光环'],
            startNode: 'ceo_start'
        },
        {
            id: 'emperor',
            name: '千古一帝',
            description: '重生为统一天下的帝王,手握百万雄兵,后宫佳丽三千',
            initialStats: { charm: 90, intelligence: 85, wealth: 95, strength: 70 },
            cheats: ['帝王威压', '天命所归', '读心术'],
            startNode: 'emperor_start'
        },
        {
            id: 'beggar',
            name: '乞丐之王',
            description: '重生为街头乞丐,但拥有神秘系统,从乞讨开始逆袭人生',
            initialStats: { charm: 30, intelligence: 60, wealth: 5, strength: 50 },
            cheats: ['幸运爆棚', '隐藏任务', '人脉觉醒'],
            startNode: 'beggar_start'
        }
    ],

    // 剧情节点数据库
    storyNodes: {
        // ===== 霸总线 =====
        'ceo_start': {
            text: `我重生了！

睁开眼的瞬间,脑海中涌入海量记忆。我现在是全球最大财团的CEO,名下资产超过万亿,私人飞机有20架,豪宅遍布全球。

【叮！超级富豪系统激活】
【当前身份：世界首富】
【新手礼包已发放：获得"商业预知"能力(可预见未来7天的商业趋势)】

秘书敲门进来："总裁,今天有三个重要会议：上午10点收购苹果公司,下午2点和沙特王子谈石油生意,晚上8点参加慈善晚宴。"

我看着镜子里那张帅得人神共愤的脸,嘴角勾起一抹邪魅的笑容。`,
            choices: [
                { text: '先收购苹果再说', nextNode: 'ceo_apple', statCheck: null },
                { text: '石油生意更重要', nextNode: 'ceo_oil', statCheck: null },
                { text: '慈善晚宴装逼去', nextNode: 'ceo_charity', statCheck: null }
            ]
        },

        'ceo_apple': {
            text: `我打了个响指："给我接苹果CEO库克。"

三分钟后,视频通话接通。库克一脸谄媚："亲爱的总裁先生,有什么可以为您效劳？"

"我要收购苹果,开个价吧。"

库克眼睛一亮："我们市值3万亿美元..."

"3万亿？"我轻蔑一笑,"我给你5万亿,但有个条件——明天开始,所有iPhone必须印上我的头像。"

库克激动得差点跪下："没问题！马上安排！"

【叮！成功收购苹果公司】
【财富 -50000亿 | 魅力 +20 | 获得成就：让世界记住我的脸】

第二天,全球果粉疯狂了。有人欢呼"这是艺术",有人抗议"还我乔布斯"。`,
            choices: [
                { text: '继续收购其他科技公司', nextNode: 'ceo_tech', statCheck: null },
                { text: '去慈善晚宴装更大的逼', nextNode: 'ceo_charity', statCheck: null },
                { text: '用预知能力炒股', nextNode: 'ceo_stock', statCheck: null }
            ]
        },

        'ceo_oil': {
            text: `我乘坐私人飞机抵达迪拜,沙特王子亲自迎接。

"尊贵的客人,欢迎来到沙漠天堂。"王子鞠躬道。

我淡淡地说："我要买下你们所有的油田。"

王子一愣："这...这需要和国王商量..."

"不用商量了。"我掏出一张黑卡,"这里有10万亿美元额度,够吗？"

王子的眼睛变成了$符号："够！太够了！从今天起,您就是石油之王！"

【叮！掌控全球60%石油资源】
【财富 -100000亿 | 武力 +30 | 获得称号：能源霸主】

突然,我的手机响了。是联合国秘书长："总裁先生,您的行为导致全球能源危机,请您..."

我直接挂断电话。`,
            choices: [
                { text: '操控全球油价', nextNode: 'ceo_price', statCheck: null },
                { text: '投资新能源', nextNode: 'ceo_energy', statCheck: null },
                { text: '回公司处理事务', nextNode: 'ceo_office', statCheck: null }
            ]
        },

        'ceo_charity': {
            text: `慈善晚宴上,名流云集。

我刚入场,全场灯光聚焦在我身上。主持人激动地宣布："今晚的慈善之星——世界首富先生！"

一位女明星扭着腰肢走过来："总裁,能和我合个影吗？"

我搂住她的腰："合影可以,但你得答应我一个条件。"

"什么条件？"她娇羞地问。

"明天开始,你所有电影都要由我投资。"

她眼睛放光："求之不得！"

【叮！魅力爆发,征服好莱坞】
【魅力 +25 | 财富 -5000亿 | 解锁新支线：娱乐帝国】

这时,一个熟悉的身影出现——前世害我破产的死对头。`,
            choices: [
                { text: '当场羞辱他', nextNode: 'ceo_revenge', statCheck: null },
                { text: '假装不认识', nextNode: 'ceo_ignore', statCheck: null },
                { text: '收购他的公司', nextNode: 'ceo_buyout', statCheck: null }
            ]
        },

        'ceo_stock': {
            text: `我启动"商业预知"能力,眼前浮现出未来7天的股市走势。

特斯拉股票将在三天后暴涨300%,因为马斯克要宣布火星殖民计划。
比特币将在五天后突破100万美元,因为某国将采用它为法定货币。
一家名不见经传的小公司将在七天后发现永生技术...

我毫不犹豫地下注：
- 买入特斯拉期权：1000亿美元
- 抄底比特币：5000亿美元
- 收购那家小公司：100亿美元

三天后,特斯拉果然暴涨。我的资产翻倍了。

【叮！预知能力立功】
【财富 +15000亿 | 智力 +15 | 系统提示：预知能力冷却时间7天】

但就在这时,SEC(美国证券交易委员会)找上门来...`,
            choices: [
                { text: '用钱摆平', nextNode: 'ceo_bribe', statCheck: null },
                { text: '展示实力让他们闭嘴', nextNode: 'ceo_power', statCheck: null },
                { text: '转移资产到海外', nextNode: 'ceo_escape', statCheck: null }
            ]
        },

        'ceo_tech': {
            text: `我决定打造科技帝国。

"秘书,给我列出全球前十科技公司。"

"总裁,分别是：微软、谷歌、亚马逊、Meta、英伟达、三星、台积电、SAP、甲骨文、IBM。"

"全部收购。"

秘书手一抖,平板掉在地上："总...总裁,这需要至少20万亿美元..."

"我有。"我平静地说,"另外,再成立一个新的部门,研发时光机。"

"时...时光机？"

"对,我要回到过去,把那些错过的项目都拿下。"

【叮！启动"科技霸权"计划】
【财富 -200000亿 | 智力 +30 | 解锁黑科技树】

一年后,我控制了全球90%的科技产业。人类进入了"总裁纪元"。`,
            choices: [
                { text: '研发人工智能统治世界', nextNode: 'ceo_ai', statCheck: null },
                { text: '开发星际旅行技术', nextNode: 'ceo_space', statCheck: null },
                { text: '享受人生', nextNode: 'ceo_end_1', statCheck: null }
            ]
        },

        'ceo_price': {
            text: `我坐在石油控制室里,面前是全球油价实时图表。

"总裁,现在油价是每桶80美元。"助手汇报。

我微微一笑："提高到800美元。"

"什...什么？这会引发全球经济崩溃的！"

"那就崩溃吧。"我靠在真皮座椅上,"反正我有足够的钱度过危机,而其他人没有。"

油价飙升到800美元。全球陷入混乱：
- 航空公司纷纷破产
- 汽车销量暴跌90%
- 各国政府紧急召开会议

我的账户余额却增加了10倍。

【叮！成为全球经济公敌】
【财富 +900000亿 | 魅力 -50 | 获得debuff：全民仇恨】

这时,我的办公室被包围了...`,
            choices: [
                { text: '投降认错', nextNode: 'ceo_surrender', statCheck: null },
                { text: '用钱收买军队', nextNode: 'ceo_army', statCheck: null },
                { text: '启动末日预案', nextNode: 'ceo_doomsday', statCheck: null }
            ]
        },

        'ceo_energy': {
            text: `"石油太脏了。"我说,"我要投资清洁能源。"

我投入10万亿美元,成立"新能源帝国"：
- 建设全球最大的太阳能发电站
- 研发可控核聚变技术
- 收购所有电动车公司

五年后,我成功了。可控核聚变实现商业化,能源变得免费。

全世界为我欢呼。我从"能源暴君"变成"救世主"。

【叮！完成能源革命】
【财富 -100000亿(但获得无限能源收益) | 魅力 +100 | 获得称号：人类之光】

联合国授予我"地球守护者"勋章。诺贝尔奖委员会为我增设"总裁奖"。`,
            choices: [
                { text: '竞选地球总统', nextNode: 'ceo_president', statCheck: null },
                { text: '移民火星', nextNode: 'ceo_mars', statCheck: null },
                { text: '功成身退', nextNode: 'ceo_end_2', statCheck: null }
            ]
        },

        'ceo_revenge': {
            text: `我走到死对头面前,举起一杯香槟。

"还记得我吗？"我笑着问。

他脸色苍白："当...当然记得,总裁先生。"

"前世你害我破产,这一世..."我把香槟倒在他头上,"我让你体验一下什么叫绝望。"

我打了个响指,保镖上前将他拖走。

第二天,新闻头条：《某知名企业破产,老板跳楼未遂》。

我知道,是我干的。

【叮！复仇成功】
【魅力 -10 | 获得成就：睚眦必报】

但不知为何,我心里空落落的。`,
            choices: [
                { text: '继续寻找刺激', nextNode: 'ceo_continue', statCheck: null },
                { text: '反思人生', nextNode: 'ceo_reflect', statCheck: null },
                { text: '开启新目标', nextNode: 'ceo_newgoal', statCheck: null }
            ]
        },

        'ceo_buyout': {
            text: `我微笑着走向死对头："老朋友,好久不见。"

他警惕地看着我："你想干什么？"

"我想收购你的公司。"

"不可能！这是我的心血！"

"100万亿。"

他愣住了。

"200万亿。"

他开始动摇。

"1000万亿,外加我私人岛屿的使用权。"

他跪下了："成交！"

【叮！兵不血刃解决仇敌】
【财富 -1000000亿 | 智力 +20 | 获得成就：钞能力无敌】

后来,他在我的公司当清洁工。每次看到我,都要鞠躬问好。`,
            choices: [
                { text: '原谅他', nextNode: 'ceo_forgive', statCheck: null },
                { text: '继续折磨他', nextNode: 'ceo_torture', statCheck: null },
                { text: '无视他', nextNode: 'ceo_ignore2', statCheck: null }
            ]
        },

        'ceo_end_1': {
            text: `我站在世界第一高楼的顶层,俯瞰整个城市。

身后是我的帝国：
- 控制全球80%的经济
- 拥有100万员工
- 财富无法计算

但我感到空虚。

"系统,我能回到普通人的生活吗？"

【系统提示：一旦选择回归平凡,将失去所有能力和财富。是否确认？】

我笑了。`,
            choices: [
                { text: '确认回归平凡', nextNode: 'ceo_normal_end', statCheck: null },
                { text: '继续当霸总', nextNode: 'ceo_god_end', statCheck: null }
            ]
        },

        'ceo_end_2': {
            text: `我拯救了世界,成为了英雄。

但我知道,这只是另一个开始。

"系统,下一个任务是什么？"

【新任务解锁：星际殖民】
【目标：在10年内让人类成为多星球物种】

我望向星空,嘴角上扬。

"有意思。"

【霸总线·完】
【达成结局：人类之光】
【评分：SSS】`,
            choices: [
                { text: '返回主菜单', nextNode: null, statCheck: null }
            ]
        },

        'ceo_normal_end': {
            text: `我放弃了万亿财富,回到了普通人的生活。

我在街角开了一家咖啡店,每天煮咖啡,看人来人往。

偶尔有客人认出我："你不是那个世界首富吗？"

我笑笑："那是上辈子的事了。"

夕阳西下,我坐在店门口,看着平凡的街道。

这一刻,我感到前所未有的幸福。

【霸总线·完】
【达成结局：平凡是真】
【评分：A+】`,
            choices: [
                { text: '返回主菜单', nextNode: null, statCheck: null }
            ]
        },

        'ceo_god_end': {
            text: `我选择继续当霸总。

十年后,我控制了太阳系的所有资源。
百年后,我统治了整个银河系。
千年后,我成为了宇宙的主宰。

我是神。

但神,也会孤独。

【霸总线·完】
【达成结局：宇宙霸主】
【评分：SSS+】`,
            choices: [
                { text: '返回主菜单', nextNode: null, statCheck: null }
            ]
        },

        // 占位节点
        'ceo_ignore': { text: '我假装没看见他,转身离开。', choices: [{ text: '继续晚宴', nextNode: 'ceo_charity', statCheck: null }] },
        'ceo_bribe': { text: '我给了SEC主席一张空白支票。他们立刻闭嘴了。', choices: [{ text: '继续操作', nextNode: 'ceo_stock', statCheck: null }] },
        'ceo_power': { text: '我展示了我的势力网。SEC主席当场辞职。', choices: [{ text: '继续', nextNode: 'ceo_stock', statCheck: null }] },
        'ceo_escape': { text: '我将资产转移到瑞士银行。SEC拿我没办法。', choices: [{ text: '继续', nextNode: 'ceo_stock', statCheck: null }] },
        'ceo_office': { text: '回到公司,处理日常事务。无聊。', choices: [{ text: '找点刺激的', nextNode: 'ceo_start', statCheck: null }] },
        'ceo_surrender': { text: '我认输了。但即使坐牢,我也是最富有的囚犯。', choices: [{ text: '结局', nextNode: 'ceo_end_1', statCheck: null }] },
        'ceo_army': { text: '我雇佣了私人军队。现在没人敢动我。', choices: [{ text: '继续', nextNode: 'ceo_price', statCheck: null }] },
        'ceo_doomsday': { text: '我启动了末日堡垒计划。世界毁灭我也能活。', choices: [{ text: '等待末日', nextNode: 'ceo_end_1', statCheck: null }] },
        'ceo_president': { text: '我竞选地球总统,全票通过。', choices: [{ text: '结局', nextNode: 'ceo_end_2', statCheck: null }] },
        'ceo_mars': { text: '我移民火星,建立了新文明。', choices: [{ text: '结局', nextNode: 'ceo_end_2', statCheck: null }] },
        'ceo_continue': { text: '我继续寻找新的刺激。', choices: [{ text: '随机事件', nextNode: 'ceo_start', statCheck: null }] },
        'ceo_reflect': { text: '我开始思考人生的意义。', choices: [{ text: '顿悟', nextNode: 'ceo_end_1', statCheck: null }] },
        'ceo_newgoal': { text: '我设定了新目标：统治宇宙。', choices: [{ text: '出发', nextNode: 'ceo_end_2', statCheck: null }] },
        'ceo_forgive': { text: '我原谅了他。他感动得哭了。', choices: [{ text: '结局', nextNode: 'ceo_end_2', statCheck: null }] },
        'ceo_torture': { text: '我继续折磨他。最后他疯了。', choices: [{ text: '结局', nextNode: 'ceo_end_1', statCheck: null }] },
        'ceo_ignore2': { text: '我彻底无视他。当他不存在。', choices: [{ text: '继续', nextNode: 'ceo_start', statCheck: null }] },
        'ceo_ai': { text: '我创造了超级AI。它比我更聪明。', choices: [{ text: '被AI取代', nextNode: 'ceo_end_1', statCheck: null }] },
        'ceo_space': { text: '我开发了曲率引擎。人类进入星际时代。', choices: [{ text: '结局', nextNode: 'ceo_end_2', statCheck: null }] },

        // ===== 皇帝线 =====
        'emperor_start': {
            text: `我重生了！

这次,我是大夏王朝的开国皇帝。

龙椅之下,跪着文武百官。
后宫之中,藏着三千佳丽。
边疆之外,百万雄师待命。

【叮！帝王系统激活】
【当前身份：大夏太祖皇帝】
【新手礼包：帝王威压(可使任何人臣服)、天命所归(国运加持)、读心术(可读取他人想法)】

宰相上前禀报："陛下,北境蛮族入侵,南疆叛乱,东海水患,西域断交...四境告急啊！"

我冷笑一声："慌什么？朕刚重生,正好大展身手。"`,
            choices: [
                { text: '御驾亲征北境', nextNode: 'emperor_war', statCheck: null },
                { text: '先处理内政', nextNode: 'emperor_politics', statCheck: null },
                { text: '选妃充实后宫', nextNode: 'emperor_harem', statCheck: null }
            ]
        },

        'emperor_war': {
            text: `我披上龙袍,跨上战马。

"众将士听令！随朕出征！"

百万大军浩浩荡荡向北境进发。

三天后,两军对垒。

蛮族首领嘲笑我："小小中原皇帝,也敢来送死？"

我启动"帝王威压"。

刹那间,天地变色。蛮族士兵纷纷跪地,连他们的战马都匍匐在地。

首领惊恐万分："这...这是什么力量？"

我淡淡地说："跪下,或者死。"

他毫不犹豫地跪下了。

【叮！不战而屈人之兵】
【武力 +30 | 魅力 +40 | 获得领土：北境三千里】

我俘虏了十万蛮族精锐,收编为大夏禁军。`,
            choices: [
                { text: '继续征服四方', nextNode: 'emperor_conquer', statCheck: null },
                { text: '班师回朝', nextNode: 'emperor_return', statCheck: null },
                { text: '就地称王建立新都', nextNode: 'emperor_newcapital', statCheck: null }
            ]
        },

        'emperor_politics': {
            text: `我回到朝堂,开始改革。

"从今日起,废除苛捐杂税,实行均田制。"

"科举制度全面开放,不论出身,唯才是举。"

"设立监察院,严查贪官污吏。"

大臣们议论纷纷：
"陛下圣明！"
"此举恐得罪世家大族啊..."
"百姓会拥护陛下的！"

我启动"读心术",发现宰相心里在想："这皇帝疯了,这样下去我们怎么捞钱？"

我冷笑："宰相大人,你昨晚收受的十万两白银,可还满意？"

宰相脸色煞白,扑通跪下："陛下饶命！"

【叮！整顿朝纲】
【智力 +25 | 财富 +50(国库充盈) | 威望 +50】

百姓夹道欢迎,称我为"青天皇帝"。`,
            choices: [
                { text: '继续深化改革', nextNode: 'emperor_reform', statCheck: null },
                { text: '巡游天下', nextNode: 'emperor_tour', statCheck: null },
                { text: '修建皇宫', nextNode: 'emperor_palace', statCheck: null }
            ]
        },

        'emperor_harem': {
            text: `选秀之日,三千佳丽齐聚紫禁城。

我坐在龙椅上,一个个审视。

突然,一个女子吸引了我的注意。她不像其他人那样谄媚,而是冷冷地看着我。

"你叫什么名字？"我问。

"臣女林清雪,无意入选,请陛下放我回家。"

满朝哗然。竟有人敢拒绝皇帝！

我笑了。有趣。

"准了。不过,你要答应我一个条件。"

"什么条件？"

"做我的皇后,和我一起治理这个国家。"

她愣住了。

【叮！邂逅真爱】
【魅力 +35 | 解锁支线：帝后同心】

后来,她成了我最得力的助手。我们一起开创了盛世。`,
            choices: [
                { text: '与她共治天下', nextNode: 'emperor_cooperate', statCheck: null },
                { text: '继续选妃', nextNode: 'emperor_moreconcubines', statCheck: null },
                { text: '微服私访找更多奇女子', nextNode: 'emperor_incognito', statCheck: null }
            ]
        },

        'emperor_conquer': {
            text: `我乘胜追击,一年之内征服了周边所有国家。

东瀛、高丽、安南、暹罗...纷纷臣服。

万国来朝的那一天,我站在城楼上,看着来自世界各地的使节。

他们献上珍宝,称我为"天可汗"。

【叮！建立庞大帝国】
【武力 +50 | 魅力 +60 | 领土扩张10倍】

但我并不满足。

"系统,世界上还有更大的大陆吗？"

【提示：向西航行三月,有新大陆】

我下令建造舰队。

"朕要征服整个世界。"`,
            choices: [
                { text: '远征西方', nextNode: 'emperor_west', statCheck: null },
                { text: '巩固现有版图', nextNode: 'emperor_consolidate', statCheck: null },
                { text: '派皇子去探索', nextNode: 'emperor_delegate', statCheck: null }
            ]
        },

        'emperor_return': {
            text: `我凯旋回朝。

百姓夹道欢迎,鲜花铺满街道。

我封赏将士,减免赋税,大赦天下。

举国欢庆。

但我知道,这只是开始。

【叮！威望达到顶峰】
【魅力 +40 | 解锁特殊能力：民心所向(可随时调动百万义勇军)】

夜晚,我独自站在城楼上,望着星空。

"下一站,该征服哪里呢？"`,
            choices: [
                { text: '规划下一次远征', nextNode: 'emperor_war', statCheck: null },
                { text: '享受和平', nextNode: 'emperor_peace', statCheck: null },
                { text: '培养继承人', nextNode: 'emperor_heir', statCheck: null }
            ]
        },

        'emperor_reform': {
            text: `我推行了更激进的改革：

- 废除奴隶制
- 男女平等
- 普及教育
- 发展科技

保守派强烈反对："陛下,这违背祖制啊！"

我冷笑："祖制？朕就是祖制的创造者。"

我罢免了所有反对的大臣,启用年轻有为的新人。

十年后,大夏王朝成为世界上最先进的国家：
- 发明了蒸汽机
- 建立了现代医疗体系
- 实现了义务教育

历史学家称这个时代为"太祖盛世"。

【叮！开创文明新纪元】
【智力 +50 | 魅力 +50 | 获得成就：千古一帝】`,
            choices: [
                { text: '继续推动进步', nextNode: 'emperor_progress', statCheck: null },
                { text: '功成身退', nextNode: 'emperor_retire', statCheck: null },
                { text: '向外输出文明', nextNode: 'emperor_export', statCheck: null }
            ]
        },

        'emperor_cooperate': {
            text: `我和林清雪并肩治理国家。

她擅长内政,我擅长军事。
她仁慈宽厚,我果断狠辣。
我们互补完美。

十年间,大夏王朝国力鼎盛,百姓安居乐业。

有一天,她问我："陛下,你后悔当初选择我吗？"

我握住她的手："这是我做过最正确的决定。"

【叮！帝后同心,其利断金】
【魅力 +40 | 智力 +30 | 解锁结局：神仙眷侣】

我们白头偕老,成为后世传颂的佳话。`,
            choices: [
                { text: '结局', nextNode: 'emperor_end_1', statCheck: null }
            ]
        },

        'emperor_end_1': {
            text: `我在位六十年,开创了大夏王朝的黄金时代。

临终前,我握着太子的手：
"记住,权力不是用来享受的,是用来责任的。"

太子含泪点头。

我闭上眼睛,安详离去。

后世史书记载：
"太祖皇帝,千古一帝。文治武功,无人能及。"

【皇帝线·完】
【达成结局：千古传奇】
【评分：SSS】`,
            choices: [
                { text: '返回主菜单', nextNode: null, statCheck: null }
            ]
        },

        // 皇帝线其他节点
        'emperor_newcapital': { text: '我在北境建立新都,命名为"北辰"。', choices: [{ text: '继续', nextNode: 'emperor_conquer', statCheck: null }] },
        'emperor_tour': { text: '我微服私访,体察民情。', choices: [{ text: '回宫', nextNode: 'emperor_politics', statCheck: null }] },
        'emperor_palace': { text: '我修建了史上最豪华的宫殿。', choices: [{ text: '入住', nextNode: 'emperor_harem', statCheck: null }] },
        'emperor_moreconcubines': { text: '我又选了九千九百九十九个妃子。', choices: [{ text: '翻牌子', nextNode: 'emperor_harem', statCheck: null }] },
        'emperor_incognito': { text: '我换上便装,溜出皇宫。', choices: [{ text: '偶遇奇遇', nextNode: 'emperor_harem', statCheck: null }] },
        'emperor_west': { text: '我率领舰队西征,发现了新大陆。', choices: [{ text: '殖民', nextNode: 'emperor_conquer', statCheck: null }] },
        'emperor_consolidate': { text: '我专心治理现有领土。', choices: [{ text: '内政', nextNode: 'emperor_politics', statCheck: null }] },
        'emperor_delegate': { text: '我派皇子去探索世界。', choices: [{ text: '等待回报', nextNode: 'emperor_conquer', statCheck: null }] },
        'emperor_peace': { text: '我享受和平年代。', choices: [{ text: '养老', nextNode: 'emperor_end_1', statCheck: null }] },
        'emperor_heir': { text: '我精心培养太子。', choices: [{ text: '传位', nextNode: 'emperor_end_1', statCheck: null }] },
        'emperor_progress': { text: '我推动工业革命。', choices: [{ text: '未来', nextNode: 'emperor_end_1', statCheck: null }] },
        'emperor_retire': { text: '我禅让皇位,云游四海。', choices: [{ text: '逍遥', nextNode: 'emperor_end_1', statCheck: null }] },
        'emperor_export': { text: '我向世界输出大夏文明。', choices: [{ text: '全球化', nextNode: 'emperor_end_1', statCheck: null }] },

        // ===== 乞丐线 =====
        'beggar_start': {
            text: `我重生了！

这次,我是个乞丐。

破碗、烂衣、臭气熏天。
路人掩鼻而过,狗都嫌弃我。

但我脑海中响起一个声音：

【叮！乞丐逆袭系统激活】
【当前身份：京城第一乞丐】
【新手礼包：幸运爆棚(走路捡钱概率100%)、隐藏任务系统、人脉觉醒(可识别潜在贵人)】

我低头看了看自己的破碗,里面只有三个铜板。

"系统,这就是我的起点？"

【是的宿主。但请记住：每个大帝都曾卑微】

我笑了。好,那我就从这三个铜板开始,逆袭人生！`,
            choices: [
                { text: '先去乞讨试试运气', nextNode: 'beggar_beg', statCheck: null },
                { text: '用铜板做小生意', nextNode: 'beggar_business', statCheck: null },
                { text: '寻找隐藏任务', nextNode: 'beggar_quest', statCheck: null }
            ]
        },

        'beggar_beg': {
            text: `我端着破碗,来到繁华街道。

"行行好,给点吃的吧..."

路人纷纷避开。

突然,系统提示：【幸运爆棚触发！】

一个衣着华丽的公子哥走过,不小心掉了钱包。

我捡起钱包,里面有：
- 银票一万两
- 玉佩一块(价值连城)
- 名片：丞相府大公子

我该：`,
            choices: [
                { text: '据为己有', nextNode: 'beggar_steal', statCheck: null },
                { text: '归还求赏', nextNode: 'beggar_return', statCheck: null },
                { text: '跟踪他找更大机会', nextNode: 'beggar_follow', statCheck: null }
            ]
        },

        'beggar_business': {
            text: `我用三个铜板买了两个馒头。

吃了一个,留了一个。

然后我发现路边有棵苹果树,地上掉了很多烂苹果。

我捡起烂苹果,擦干净,切成小块,用竹签串起来。

"冰糖葫芦！新鲜苹果！三文钱一串！"

路人好奇地看着我这个乞丐卖东西。

一个小女孩买了第一串。

渐渐地,我的摊位前排起了队。

一天下来,我赚了五百文。

【叮！第一桶金】
【财富 +500文 | 智力 +10 | 解锁技能：商业头脑】

我决定扩大生意。`,
            choices: [
                { text: '租个店面', nextNode: 'beggar_shop', statCheck: null },
                { text: '雇其他乞丐帮忙', nextNode: 'beggar_hire', statCheck: null },
                { text: '开发新产品', nextNode: 'beggar_product', statCheck: null }
            ]
        },

        'beggar_quest': {
            text: `我启动"隐藏任务系统"。

眼前浮现出一个任务列表：

【任务1：帮助迷路的老奶奶回家(奖励：神秘功法)】
【任务2：救一只受伤的流浪狗(奖励：忠诚伙伴)】
【任务3：阻止一场街头斗殴(奖励：武林秘籍)】

我选择了任务1。

不远处,一位老奶奶正在哭泣。

我走过去："老人家,怎么了？"

"我迷路了,找不到家..."

我扶起她,根据系统导航,送她回家。

到了目的地,我惊呆了——这是一座豪华府邸,门上写着"大将军府"。

老奶奶慈祥地笑："孩子,谢谢你。我是将军的母亲。"

她递给我一本泛黄的书："这是我家传的《九阳神功》,送给你。"

【叮！完成任务1】
【武力 +50 | 获得武功：九阳神功(初级)】`,
            choices: [
                { text: '修炼武功', nextNode: 'beggar_train', statCheck: null },
                { text: '继续做其他任务', nextNode: 'beggar_quest2', statCheck: null },
                { text: '结交将军府', nextNode: 'beggar_general', statCheck: null }
            ]
        },

        'beggar_steal': {
            text: `我把钱包藏起来,心跳加速。

这可是我一辈子都没见过的巨款！

但就在这时,系统警告：【检测到道德值下降,将影响后续剧情】

我犹豫了。

最终,我还是决定：不还了！有钱能使鬼推磨！

我用这笔钱买了衣服、食物,还租了一间小屋。

我从乞丐变成了普通人。

但良心不安。

【叮！获得不义之财】
【财富 +10000两 | 魅力 -20 | 获得debuff：内心谴责】

几天后,丞相府的人找到我...`,
            choices: [
                { text: '逃跑', nextNode: 'beggar_run', statCheck: null },
                { text: '坦白从宽', nextNode: 'beggar_confess', statCheck: null },
                { text: '用钱贿赂', nextNode: 'beggar_bribe2', statCheck: null }
            ]
        },

        'beggar_return': {
            text: `我追上公子哥："公子,您的钱包掉了。"

他检查了一下,惊喜万分："太好了！里面的东西都在！"

他拿出一张银票："这是给你的酬谢,一千两。"

我接过银票,激动得手发抖。

他又说："你如此诚实,不如来我府上当差吧。"

【叮！获得贵人赏识】
【财富 +1000两 | 魅力 +30 | 解锁身份：丞相府家丁】

我成了丞相府的家丁,从此走上人生巅峰。`,
            choices: [
                { text: '在丞相府发展', nextNode: 'beggar_minister', statCheck: null },
                { text: '辞职创业', nextNode: 'beggar_business', statCheck: null },
                { text: '继续做好事', nextNode: 'beggar_quest', statCheck: null }
            ]
        },

        'beggar_follow': {
            text: `我悄悄跟在公子哥后面。

他走进了一座豪华府邸——丞相府。

我趴在墙头偷听。

原来,他是丞相的儿子,正在策划一场政变！

如果我揭发他,就能得到皇帝赏识。
但如果我加入他,成功后就是开国功臣。

我陷入沉思。`,
            choices: [
                { text: '向皇帝告密', nextNode: 'beggar_emperor', statCheck: null },
                { text: '加入政变', nextNode: 'beggar_coup', statCheck: null },
                { text: '置身事外', nextNode: 'beggar_neutral', statCheck: null }
            ]
        },

        'beggar_shop': {
            text: `我租了一间小店铺,起名"乞丐小吃"。

凭借独特的配方和亲民的价格,生意火爆。

一个月后,我开了三家分店。
一年后,我成了京城餐饮巨头。

【叮！商业帝国雏形】
【财富 +50000两 | 智力 +20 | 获得称号：美食大亨】

但我没有忘记初心。
我雇佣了大量乞丐员工,给他们提供工作和住所。

百姓称我为"慈善企业家"。`,
            choices: [
                { text: '扩张到全国', nextNode: 'beggar_nationwide', statCheck: null },
                { text: '投资其他行业', nextNode: 'beggar_invest', statCheck: null },
                { text: '回馈社会', nextNode: 'beggar_charity', statCheck: null }
            ]
        },

        'beggar_train': {
            text: `我开始修炼《九阳神功》。

每天凌晨起床,打坐练功。
三个月后,我突破了第一层。
一年后,我达到第九层巅峰。

我能一掌劈开巨石,能飞檐走壁,能百步穿杨。

【叮！武功大成】
【武力 +100 | 获得称号：武林高手】

这时,江湖上出现了一个邪恶组织"血刀门",四处杀人放火。

我决定出手。`,
            choices: [
                { text: '单挑血刀门', nextNode: 'beggar_hero', statCheck: null },
                { text: '召集盟友', nextNode: 'beggar_alliance', statCheck: null },
                { text: '报告官府', nextNode: 'beggar_official', statCheck: null }
            ]
        },

        'beggar_minister': {
            text: `我在丞相府表现出色。

三年后,丞相收我为义子。
五年后,我考中状元。
十年后,我成为当朝宰相。

我从乞丐到位极人臣,只用了十年。

【叮！官场逆袭】
【魅力 +50 | 智力 +40 | 获得成就：一人之下】

我推行改革,造福百姓。
曾经的我,知道底层人民的苦难。
所以,我制定了许多惠民政策。

百姓称我为"平民宰相"。`,
            choices: [
                { text: '继续为官', nextNode: 'beggar_end_1', statCheck: null },
                { text: '辞官归隐', nextNode: 'beggar_retire', statCheck: null },
                { text: '篡位夺权', nextNode: 'beggar_usurp', statCheck: null }
            ]
        },

        'beggar_hero': {
            text: `我独自一人,杀入血刀门总部。

一百名血刀弟子围攻我。
我使出九阳神功,金光万丈。
一招"亢龙有悔",震飞所有人。

血刀门主亲自出战。
我们大战三百回合。
最后,我以一招之差获胜。

【叮！铲除邪恶】
【武力 +30 | 魅力 +60 | 获得称号：救世英雄】

皇帝亲自接见我,封我为"护国大将军"。

我从乞丐,变成了将军。`,
            choices: [
                { text: '接受封赏', nextNode: 'beggar_end_2', statCheck: null },
                { text: '拒绝封赏,云游四海', nextNode: 'beggar_wander', statCheck: null }
            ]
        },

        'beggar_end_1': {
            text: `我在宰相之位坐了二十年。

期间,我推动了：
- 废除苛捐杂税
- 建立孤儿院
- 普及基础教育
- 改善乞丐待遇

退休那天,十万百姓夹道相送。

有人问我："大人,您从一个乞丐做到宰相,有什么秘诀？"

我笑笑："不忘初心。"

【乞丐线·完】
【达成结局：平民宰相】
【评分：SSS】`,
            choices: [
                { text: '返回主菜单', nextNode: null, statCheck: null }
            ]
        },

        'beggar_end_2': {
            text: `我成为护国大将军,统领百万雄师。

边疆安宁,百姓安居。

我娶了公主为妻,成了驸马爷。

但我依然记得,我曾经是个乞丐。

每年冬天,我都会亲自去街头,给乞丐们发放棉衣和食物。

有人说我作秀。
我不在乎。

因为我知道,那一件棉衣,可能就是一个乞丐活下去的希望。

【乞丐线·完】
【达成结局：侠之大者】
【评分：SSS】`,
            choices: [
                { text: '返回主菜单', nextNode: null, statCheck: null }
            ]
        },

        // 乞丐线其他节点(简化)
        'beggar_hire': { text: '我雇佣了十个乞丐,组成"乞丐军团"。', choices: [{ text: '继续', nextNode: 'beggar_shop', statCheck: null }] },
        'beggar_product': { text: '我开发了"叫花鸡"等招牌菜。', choices: [{ text: '开店', nextNode: 'beggar_shop', statCheck: null }] },
        'beggar_quest2': { text: '我继续完成隐藏任务。', choices: [{ text: '任务完成', nextNode: 'beggar_train', statCheck: null }] },
        'beggar_general': { text: '我和将军府建立了良好关系。', choices: [{ text: '发展', nextNode: 'beggar_minister', statCheck: null }] },
        'beggar_run': { text: '我逃跑了,但内心永远不安。', choices: [{ text: '结局', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_confess': { text: '我坦白了,公子哥原谅了我。', choices: [{ text: '成为朋友', nextNode: 'beggar_minister', statCheck: null }] },
        'beggar_bribe2': { text: '我试图贿赂,但失败了。', choices: [{ text: '入狱', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_emperor': { text: '我向皇帝告密,得到重赏。', choices: [{ text: '结局', nextNode: 'beggar_end_2', statCheck: null }] },
        'beggar_coup': { text: '我加入政变,成功了。', choices: [{ text: '成为新贵', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_neutral': { text: '我选择中立,继续当乞丐。', choices: [{ text: '平凡', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_nationwide': { text: '我的连锁店遍布全国。', choices: [{ text: '结局', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_invest': { text: '我投资房地产,成为首富。', choices: [{ text: '结局', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_charity': { text: '我建立了最大的慈善基金会。', choices: [{ text: '结局', nextNode: 'beggar_end_2', statCheck: null }] },
        'beggar_alliance': { text: '我联合各大门派,消灭血刀门。', choices: [{ text: '结局', nextNode: 'beggar_end_2', statCheck: null }] },
        'beggar_official': { text: '我报告官府,他们派兵剿灭。', choices: [{ text: '结局', nextNode: 'beggar_end_2', statCheck: null }] },
        'beggar_retire': { text: '我辞官归隐,开了一家小店。', choices: [{ text: '逍遥', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_usurp': { text: '我篡位成功,成为新皇帝。', choices: [{ text: '登基', nextNode: 'beggar_end_1', statCheck: null }] },
        'beggar_wander': { text: '我云游四海,行侠仗义。', choices: [{ text: '传奇', nextNode: 'beggar_end_2', statCheck: null }] }
    }
};
