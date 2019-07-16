export default [{
    "id": "1",
    "name": "客户",
    "name_en": "Customer",
    "menu_alias": "route.menuCustomer",
    "menu_icon": "icon-yonghu",
    "menu_lev": "1",
    "children": [{
        "id": "8",
        "name": "客户管理",
        "name_en": "Customer",
        "menu_alias": "route.leftCustomer",
        "menu_icon": "icon-wode",
        "menu_lev": "2",
        "path": "/customer",
        "parent": "1",
        "children": [{
            "id": "9",
            "name": "客户列表",
            "name_en": "Customer List",
            "menu_alias": "route.customerList",
            "menu_icon": "icon-wode",
            "menu_lev": "3",
            "path": "/client/customer/list",
            "parent": "8"
        }]
    }]
}, {
    "id": "10",
    "name": "需求",
    "name_en": "Demand",
    "menu_alias": "route.menuDemand",
    "menu_icon": "icon-yundanguanli",
    "menu_lev": "1",
    "children": [{
        "id": "11",
        "name": "需求管理",
        "name_en": "Demand",
        "menu_alias": "route.leftDemand",
        "menu_icon": "icon-fenlei",
        "menu_lev": "2",
        "path": "/demand",
        "parent": "10",
        "children": [{
            "id": "12",
            "name": "需求列表",
            "name_en": "Demand List",
            "menu_alias": "route.demandList",
            "menu_icon": "icon-fenlei",
            "menu_lev": "3",
            "path": "/demand/demand/list",
            "parent": "11"
        }]
    }]
}, {
    "id": "2",
    "name": "物流",
    "name_en": "Logistics",
    "menu_alias": "route.menuLogistics",
    "menu_icon": "icon-yundanguanli",
    "menu_lev": "1",
    "children": [{
        "id": "18",
        "name": "运单管理",
        "name_en": "WayBill",
        "menu_alias": "route.leftLogistics",
        "menu_icon": "icon-dingdan",
        "menu_lev": "2",
        "path": "/logistics",
        "parent": "2",
        "children": [{
            "id": "19",
            "name": "运单列表",
            "name_en": "WayBill List",
            "menu_alias": "route.logisticsList",
            "menu_icon": "icon-dingdan",
            "menu_lev": "3",
            "path": "/logistics/waybill/waybill-list",
            "parent": "18"
        }, {
            "id": "31",
            "name": "运单同步",
            "name_en": "waybillAwait",
            "menu_alias": "route.waybillAwait",
            "menu_icon": "icon-tongbu",
            "menu_lev": "3",
            "path": "/logistics/waybill/waybill-await",
            "parent": "18"
        }]
    }, {
        "id": "20",
        "name": "海运管理",
        "name_en": "Channel",
        "menu_alias": "route.leftChannel",
        "menu_icon": "icon-lunchuan",
        "menu_lev": "2",
        "path": "/channel",
        "parent": "2",
        "children": [{
            "id": "21",
            "name": "海运价格",
            "name_en": "Channel Price",
            "menu_alias": "route.channgeList",
            "menu_icon": "icon-jiage",
            "menu_lev": "3",
            "path": "/logistics/sea/sea-price",
            "parent": "20"
        }, {
            "id": "23",
            "name": "海运渠道",
            "name_en": "seaChannel",
            "menu_alias": "route.seaChannel",
            "menu_icon": "icon-qudao",
            "menu_lev": "3",
            "path": "/logistics/sea/sea-channel",
            "parent": "20"
        }]
    }, {
        "id": "24",
        "name": "物流管理",
        "name_en": "logisticsl",
        "menu_alias": "route.logisticsl",
        "menu_icon": "icon-kuaidi",
        "menu_lev": "2",
        "path": "/logisticsl",
        "parent": "2",
        "children": [{
            "id": "25",
            "name": "物流渠道列表",
            "name_en": "logisticsChannelList",
            "menu_alias": "route.logisticsChannelList",
            "menu_icon": "icon-qudao",
            "menu_lev": "3",
            "path": "/logistics/logistics-channel/logistics-channel-list",
            "parent": "24"
        }, {
            "id": "26",
            "name": "重量段模板",
            "name_en": "weightTemplate",
            "menu_alias": "route.weightTemplate",
            "menu_icon": "icon-moban",
            "menu_lev": "3",
            "path": "/logistics/logistics-channel/weight-template",
            "parent": "24"
        }]
    }]
}, {
    "id": "5",
    "name": "系统",
    "name_en": "System",
    "menu_alias": "route.menuSystem",
    "menu_icon": "icon-yundanguanli",
    "menu_lev": "1",
    "children": [{
        "id": "6",
        "name": "用户管理",
        "name_en": "User",
        "menu_alias": "route.leftUser",
        "menu_icon": "icon-yonghuguanli",
        "menu_lev": "2",
        "path": "/user",
        "parent": "5",
        "children": [{
            "id": "7",
            "name": "用户列表",
            "name_en": "User List",
            "menu_alias": "route.userList",
            "menu_icon": "icon-yonghuguanli",
            "menu_lev": "3",
            "path": "/system/user/list",
            "parent": "6"
        }, {
            "id": "22",
            "name": "个人中心",
            "name_en": "User Center",
            "menu_alias": "route.userCenter",
            "menu_icon": "icon-wode",
            "menu_lev": "3",
            "path": "/system/user-center",
            "parent": "6"
        }]
    }, {
        "id": "13",
        "name": "合同管理",
        "name_en": "Contract",
        "menu_alias": "route.leftContract",
        "menu_icon": "icon-bianji3",
        "menu_lev": "2",
        "path": "/contract",
        "parent": "5",
        "children": [{
            "id": "14",
            "name": "合同列表",
            "name_en": "Contract List",
            "menu_alias": "route.contractList",
            "menu_icon": "icon-hetong",
            "menu_lev": "3",
            "path": "/system/contract/contract-list",
            "parent": "13"
        }, {
            "id": "15",
            "name": "合同模板",
            "name_en": "Contract Template",
            "menu_alias": "route.contractTemplate",
            "menu_icon": "icon-moban",
            "menu_lev": "3",
            "path": "/system/contract/contract-template",
            "parent": "13"
        }]
    }, {
        "id": "16",
        "name": "系统管理",
        "name_en": "System",
        "menu_alias": "route.leftSystem",
        "menu_icon": "icon-xitongguanli",
        "menu_lev": "2",
        "path": "/system",
        "parent": "5",
        "children": [{
            "id": "17",
            "name": "系统配置",
            "name_en": "System Config",
            "menu_alias": "route.systemConfig",
            "menu_icon": "icon-peizhi",
            "menu_lev": "3",
            "path": "/system/system-manage/config",
            "parent": "16"
        }, {
            "id": "27",
            "name": "缓存管理",
            "name_en": "cache",
            "menu_alias": "route.cache",
            "menu_icon": "icon-huancun",
            "menu_lev": "3",
            "path": "/system/system-manage/cache",
            "parent": "16"
        }, {
            "id": "32",
            "name": "收费设置",
            "name_en": "收费设置",
            "menu_alias": "route.chargeSet",
            "menu_icon": "icon-xitongguanli",
            "menu_lev": "3",
            "path": "/system/system-manage/charge-set",
            "parent": "16"
        }]
    }, {
        "id": "28",
        "name": "系统工具",
        "name_en": "System Tools",
        "menu_alias": "route.systemTools",
        "menu_icon": "icon-xitongguanli",
        "menu_lev": "2",
        "path": "/system/tools",
        "parent": "5",
        "children": [{
            "id": "29",
            "name": "标签列表",
            "name_en": "labelManagement",
            "menu_alias": "route.labelManagement",
            "menu_icon": "icon-version",
            "menu_lev": "3",
            "path": "/system/label/label-management",
            "parent": "28"
        }, {
            "id": "30",
            "name": "打印设置",
            "name_en": "print",
            "menu_alias": "route.print",
            "menu_icon": "icon-dayin",
            "menu_lev": "3",
            "path": "/system/label/print",
            "parent": "28"
        }]
    }]
}]