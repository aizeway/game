new Vue({
		el: '#RecommendSort',
		data: {
			capacity: '20MB',
			Popularity: 10,
			RecommendArr: [{
				img: "upload/32269.jpg",
				str: '部落冲突'
			}, {
				img: "upload/83333.jpg",
				str: '时空猎人'
			}, {
				img: "upload/97841.jpg",
				str: '梦幻西游'
			}, {
				img: "upload/98786.jpg",
				str: '少年三国志'
			}, {
				img: "upload/108667.jpg",
				str: '火影忍者'
			}, {
				img: "upload/109200.jpg",
				str: '大话西游'
			}, {
				img: "upload/116420.jpg",
				str: '问道手游'
			}, {
				img: "upload/117663.jpg",
				str: '王者荣耀'
			}, {
				img: "upload/119516.jpg",
				str: '新世纪福音战士'
			}],
			ClassicArr: [{
				img: "upload/1406273727859743.jpg",
				str: '拳皇98'
			}, {
				img: "upload/1407484469.jpg",
				str: '3D狂热飞车'
			}, {
				img: "upload/1406257599.jpg",
				str: '围住神经猫'
			}, {
				img: "upload/1404889743854676.jpg",
				str: '变形金刚：崛起'
			}, {
				img: "upload/1406796628.jpg",
				str: '狂野飙车8免谷歌版'
			}, {
				img: "upload/1407484683.jpg",
				str: '天天老虎机'
			}, {
				img: "upload/1407484442807362.jpg",
				str: '全民狂飙'
			}, {
				img: "upload/1406624206454326.jpg",
				str: '街头霸王4：竞技场'
			}, {
				img: "upload/1400120612.jpg",
				str: '纪念碑谷'
			}],
			topNavStr1: ['动作游戏', '益智游戏', '竞速游戏', '角色扮演', '射击飞行', '策略塔防', '棋牌桌游'],
			topNavStr2: ['三国游戏', '卡牌游戏', '策略游戏', '塔防游戏', '动作游戏', 'RPG游戏'],
			topNavStr3: ['工具', '社交', '系统', '视频', '音乐', '美化', '生活', '安全', '购物', '摄影', '咨询', '阅读', '理财', '通讯', '办公', '教育', '旅游', '娱乐'],
			searchArr: [],
			inputStr: '',
		},
		methods: {
			jsonpFn: function() {
				this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
					wd: this.inputStr,
				}, {
					jsonp: 'cb'
				}).then(function(res) {
					this.searchArr = res.data.s
				}, function(res) {
					alert("连接失败")
				})
			},
			clickFn: function(res) {
				this.inputStr = res;
				this.searchArr = '';
			},
			resetFn: function() {
				this.inputStr = '';
				this.searchArr = '';
			},
			searchFn: function() {
				window.location.href = 'https://www.baidu.com/s?wd=' + this.inputStr
			}
		}
	})
//var nums=[
//{img:"upload/.jpg",str:'万人炸金花'},
//{img:"upload/1405574802.jpg",str:'女神斗地主'},
//{img:"upload/1407122236.jpg",str:'天天爱闯关'},
//{img:"upload/1403165654.jpg",str:'嘉米麻将'},
//{img:"upload/1403920246.jpg",str:'万人斗地主'},
//{img:"upload/1407480562.jpg",str:'吸血鬼日记'},
//{img:"upload/1399441026.jpg",str:'3D狂野飞车'},
//{img:"upload/1407317142.jpg",str:'天天美女'},
//{img:"upload/119809.jpg",str:'幻城'},
//{img:"upload/122768.jpg",str:'远古传说'},
//{img:"upload/125317.jpg",str:'穿越火线枪战王者'},
//{img:"upload/152097.jpg",str:'部落冲突皇室战争'},
//{img:"upload/193773.jpg",str:'永恒纪元:戒'},
//{img:"upload/204426.jpg",str:'赤月屠龙.变态版'},
//{img:"upload/232638.jpg",str:'兄弟来一刀'},
//{img:"upload/1396605515.jpg",str:'来自星星的僵尸'},
//{img:"upload/1396605515.jpg",str:'来自星星的僵尸'},
//{img:"upload/1396605515.jpg",str:'来自星星的僵尸'},
//{img:"upload/1396605515.jpg",str:'来自星星的僵尸'},
//{img:"upload/1396605515.jpg",str:'来自星星的僵尸'},
//{img: "upload/1406273727859743.jpg",str: '拳皇98'},
//{img: "upload/1407484469.jpg",str: '3D狂热飞车'}, 
//{img: "upload/1406257599.jpg",str: '围住神经猫'},
//{img: "upload/1404889743854676.jpg",str: '变形金刚：崛起'},
//{img: "upload/1406796628.jpg",str: '狂野飙车8免谷歌版'},
//{img: "upload/1407484683.jpg",str: '天天老虎机'},
//{img: "upload/1407484442807362.jpg",str: '全民狂飙'},
//{img: "upload/1406624206454326.jpg",str: '街头霸王4：竞技场'},
//{img: "upload/1400120612.jpg",str: '纪念碑谷'}
//]

			