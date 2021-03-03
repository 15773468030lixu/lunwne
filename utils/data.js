/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png', '../../images/banner_04.png']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/nav_icon_01.png",
                title:"推荐"
            },
            {
                id:2,
                icon:"../../images/nav_icon_02.png",
                title:"酒店"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                title:"KTV"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                title:"健身"
            },
            {
                id:5,
                icon:"../../images/nav_icon_05.png",
                title:"学习"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                        id: 1,
                        subject:"凡尔纳公寓酒店",
                        coverpath:"../../images/recommend_img_01.png",
                        price:'¥198',
                        message:'天心区五一大道717号五一新干线1楼（近太平街、地铁五一广场站）'
                    },
                    {
                        id: 2,
                        subject:"伯明汉青少儿英语",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥188',
                        message:'雨花区湘府中路复地高升星光天地2楼'
                    },
                    {
                        id: 3,
                        subject:"温莎KTV",
                        coverpath:"../../images/recommend_img_03.png",
                        price:'¥78',
                        message:'芙蓉区五一广场黄兴中路168号（近乐和城）'
                    },
                    {
                        id: 4,
                        subject:"Sexybaby女子专属健身训练室",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'¥198',
                        message:'岳麓区河西岳麓区奥克斯广场国际公寓B栋1534'
                    },
                    {
                        id: 5,
                        subject:" 魅KTV",
                        coverpath:"../../images/recommend_img_06.png",
                        price:'¥98',
                        message:'芙蓉区黄兴中路188号乐和城4楼'
                    }
                ],
                [
                    {
                        artype:'hotels',
                        subject:"凡尔纳公寓酒店",
                        coverpath:"../../images/recommend_img_01.png",
                        price:'¥198',
                        message:'天心区五一大道717号五一新干线1楼（近太平街、地铁五一广场站）'
                    }
                ],
                [
                    {
                        artype:'ktv',
                        subject:"温莎KTV",
                        coverpath:"../../images/recommend_img_03.png",
                        price:'¥78',
                        message:'芙蓉区五一广场黄兴中路168号（近乐和城）'
                    },
                    {
                        artype:'ktv',
                        subject:" 魅KTV",
                        coverpath:"../../images/recommend_img_06.png",
                        price:'¥98',
                        message:'芙蓉区黄兴中路188号乐和城4楼'
                    }
                ],
                [
                    
                    {
                        artype:'sport',
                        subject:"Sexybaby女子专属健身训练室",
                        coverpath:"../../images/recommend_img_05.png",
                        price:'¥198',
                        message:'岳麓区河西岳麓区奥克斯广场国际公寓B栋1534'
                    }
                ],
                [
                    {
                        artype:'study',
                        subject:"伯明汉青少儿英语",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'¥188',
                        message:'雨花区湘府中路复地高升星光天地2楼'
                    }
                ] 
            ]
    return arr
}
/**
 * 技师 数据
 * */ 
//  function getSkilledData(){
//      var arr = [
//                  {
//                          company:"西狮独品美容美发有限公司",
//                          avatar:"../../images/skilledt_img_01.png",
//                          nickname:'张技师',
//                          price:'¥500',
//                          message:'从事美发行业60余年，有丰富经验',
//                          distance:'100m'
//                      },
//                      {
//                          company:"圆月亮美甲沙龙",
//                          avatar:"../../images/skilledt_img_02.png",
//                          nickname:'包技师',
//                          price:'¥800',
//                          message:'从事美发行业60余年，有丰富经验',
//                          distance:'200m'
//                      },
//                      {
//                          company:"璀璨美睫会所",
//                          avatar:"../../images/skilledt_img_03.png",
//                          nickname:'王技师',
//                          price:'¥600',
//                          message:'从事美发行业60余年，有丰富经验',
//                          distance:'100m'
//                      },
//                      {
//                          company:"柔丝妮美容养生馆",
//                          avatar:"../../images/skilledt_img_04.png",
//                          nickname:'黄技师',
//                          price:'¥800',
//                          message:'从事美发行业60余年，有丰富经验',
//                          distance:'400m'
//                      }
//              ]
//      return arr
//  }

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            name:'灿灿',
            phone:'13812314563',
            province:'湖南省',
            city:'长沙市',
            addr:'开福区'
        },
        {
            name:'菡菡',
            phone:'13812314563',
            province:'湖南省',
            city:'长沙市',
            addr:'岳麓区'
        }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'帅哥',
                name:'灿灿',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'灿灿',
                        phone:'13812314563',
                        province:'湖南省',
                        city:'长沙市',
                        addr:'开福区'
                    },
                    {
                        addrid:'2',
                        name:'菡菡',
                        phone:'13812314563',
                        province:'湖南省',
                        city:'长沙市',
                        addr:'岳麓区'
                    } 
                ]
            }
    return arr
}
/**
 * 省
 * */ 
function provinceData(){
    var arr = [
        // {pid:1,pzip:'110000',pname:'长沙市'},
        // {pid:2,pzip:'120000',pname:'邵阳市'}
        '请选择省份','湖南省'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','长沙市','邵阳市','常德市'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  // getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}