import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    guessRoomList: [
      {
        floorNum: 1,
        floorList: [
          {
            id: 15,
            name: "执行窗口",
            url: require("@/assets/img/floorDistribution/0楼/执行窗口.gif"),
            code: require("@/assets/img/floorDistribution/0楼/执行窗口.png")
          },
          {
            id: 16,
            name: "立案窗口",
            url: require("@/assets/img/floorDistribution/0楼/立案窗口.gif"),
            code: require("@/assets/img/floorDistribution/0楼/立案窗口.png")
          },
          {
            id: 17,
            name: "休息区",
            url: require("@/assets/img/floorDistribution/0楼/休息区.gif"),
            code: require("@/assets/img/floorDistribution/0楼/休息区.png")
          },
          {
            id: 18,
            name: "接待室",
            url: require("@/assets/img/floorDistribution/0楼/接待室.gif"),
            code: require("@/assets/img/floorDistribution/0楼/接待室.png")
          },
          {
            id: 19,
            name: "智能服务区",
            url: require("@/assets/img/floorDistribution/0楼/智能服务区.gif"),
            code: require("@/assets/img/floorDistribution/0楼/智能服务区.png")
          },
          {
            id: 20,
            name: "卫生间",
            url: require("@/assets/img/floorDistribution/0楼/卫生间.gif"),
            code: require("@/assets/img/floorDistribution/0楼/卫生间.png")
          }
        ]
      },
      {
        floorNum: 2,
        floorList: [
          {
            id: 1,
            name: "家事法庭",
            url: require("@/assets/img/floorDistribution/1楼/家事法庭.gif"),
            code: require("@/assets/img/floorDistribution/1楼/家事法庭.png")
          },
          {
            id: 2,
            name: "第十法庭",
            url: require("@/assets/img/floorDistribution/1楼/第十法庭.gif"),
            code: require("@/assets/img/floorDistribution/1楼/第十法庭.png")
          },
          {
            id: 3,
            name: "第十一法庭",
            url: require("@/assets/img/floorDistribution/1楼/第十一法庭.gif"),
            code: require("@/assets/img/floorDistribution/1楼/第十一法庭.png")
          },
          {
            id: 4,
            name: "第十二法庭",
            url: require("@/assets/img/floorDistribution/1楼/第十二法庭.gif"),
            code: require("@/assets/img/floorDistribution/1楼/第十二法庭.png")
          },
          {
            id: 5,
            name: "第十三法庭",
            url: require("@/assets/img/floorDistribution/1楼/第十三法庭.gif"),
            code: require("@/assets/img/floorDistribution/1楼/第十三法庭.png")
          },
          {
            id: 6,
            name: "第十四法庭",
            url: require("@/assets/img/floorDistribution/1楼/第十四法庭.gif"),
            code: require("@/assets/img/floorDistribution/1楼/第十四法庭.png")
          }
        ]
      },
      {
        floorNum: 3,
        floorList: [
          {
            id: 7,
            name: "第三法庭",
            url: require("@/assets/img/floorDistribution/2楼/第三法庭.gif"),
            code: require("@/assets/img/floorDistribution/2楼/第三法庭.png")
          },
          {
            id: 8,
            name: "第四法庭",
            url: require("@/assets/img/floorDistribution/2楼/第四法庭.gif"),
            code: require("@/assets/img/floorDistribution/2楼/第四法庭.png")
          },
          {
            id: 9,
            name: "第五法庭",
            url: require("@/assets/img/floorDistribution/2楼/第五法庭.gif"),
            code: require("@/assets/img/floorDistribution/2楼/第五法庭.png")
          },
          {
            id: 10,
            name: "第六法庭",
            url: require("@/assets/img/floorDistribution/2楼/第六法庭.gif"),
            code: require("@/assets/img/floorDistribution/2楼/第六法庭.png")
          },
          {
            id: 11,
            name: "第七法庭",
            url: require("@/assets/img/floorDistribution/2楼/第七法庭.gif"),
            code: require("@/assets/img/floorDistribution/2楼/第七法庭.png")
          },
          {
            id: 12,
            name: "第八法庭",
            url: require("@/assets/img/floorDistribution/2楼/第八法庭.gif"),
            code: require("@/assets/img/floorDistribution/2楼/第八法庭.png")
          }
        ]
      },
      {
        floorNum: 4,
        floorList: [
          {
            id: 13,
            name: "第二法庭",
            url: require("@/assets/img/floorDistribution/3楼/第二法庭.gif"),
            code: require("@/assets/img/floorDistribution/3楼/第二法庭.png")
          },
          {
            id: 14,
            name: "大审判庭",
            url: require("@/assets/img/floorDistribution/3楼/大审判庭.gif"),
            code: require("@/assets/img/floorDistribution/3楼/大审判庭.png")
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
