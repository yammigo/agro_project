<template>
  <div class="myAddress">
    <!--<div @click="showAdd()">选择城市</div>-->
    <section class="showChose" v-show="showChose">
      <section class="address">
        <section class="btnlist">
          <mu-button flat small color="success">选择地址：</mu-button>
          <mu-button color="error" small flat @click="closeAdd()">取消</mu-button>
          <!--<span @click="closeAdd()">取消</span>-->
          <!--<span>确定</span>-->
        </section>
        <section class="title">
          <div class="area" @click="provinceSelected()" :class="Province?'':'active'">{{Province?Province:'请选择'}}</div>
          <div class="area" @click="citySelected()" :class="City?'':'active'" v-show="Province">{{City?City:'请选择'}}</div>
          <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">
            {{District?District:'请选择'}}
          </div>
        </section>
        <ul>
          <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince"
              :class="v.id==province?'active':''">{{v.name}}
          </li>
          <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity"
              :class="v.id==city?'active':''">{{v.name}}
          </li>
          <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.fullname, k)"
              v-show="showDistrict" :class="v.id==district?'active':''">{{v.fullname}}
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  import {selectAddress,getchildren} from "../api/apihttp";
  export default {
    name: "myAddress",
    props:{
      showchose:{
          type:Boolean,
          default:false
      },
      address:{
         type:Object,
         default:{}
      }
    },
    data() {
      return {
        showChose:false,
        showProvince: true,
        showCity: false,
        showDistrict: false,
        showCityList: false,
        showDistrictList: false,
        //地址id
        province:this.address.province,
        city:this.address.city,
        district: this.address.district,
        GetProvinceId: 2,
        //具体地址
        District:'',
        Province: '',
        City: '',
        // v-for循环判断是否为当前
        selected: false,
        info:''

      }
    },
    methods: {
      commit(){
        console.log(this.province+'省'+this.city+'市'+this.district+'镇');
        console.log(this.Province+'省'+this.City+'市'+this.District+'镇');
        this.$emit('getAddress',{province:this.province,city:this.city,district:this.district})
        this.$emit('addressname',{province:this.Province,city:this.City,district:this.District})
        this.showChose = false;
      },
      closeAdd: function () {
        this.showChose = false;
      },
      showAdd:function(){
        this._selectProvince();
      },
      _filter(add, name, code) {
        let result = [];
        for (let i = 0; i < add.length; i++) {
          if (code == add[i].id) {
            result = add[i][name];
          }
        }
        return result;
      },
      getProvinceId: function (code, input, index) {
        this.province = code;
        this.Province = input;
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;
        //获取下一级数据
        // this.showCityList = this._filter(this.info, 'city', this.province);
        getchildren(this.province).then((res)=>{
          console.log(this.province)
          if(res.status==0){
            this.showCityList=res.result[0];

          }else{
            this.$message.show('error',res.message);
          }
        }).fail(()=>{
          alert('网络错误')
        });
        // 点击选择当前
        this.info.map(a => a.selected = false);
        this.info[index].selected = true;
      },
      provinceSelected: function () {
        // 清除市级和区级列表
        this.showCityList = false;
        this.showDistrictList = false;
        // 清除市级和区级选项
        this.City = false;
        this.District = false;
        // 选项页面的切换
        this.showProvince = true;
        this.showCity = false;
        this.showDistrict = false;
      },
      getCityId: function (code, input, index) {
        this.city = code;
        this.City = input;
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
        //获取下一级数据
        // this.showDistrictList = this._filter(this.showCityList, 'district', this.city);
        getchildren(this.city).then((res)=>{
          if(res.status==0){
            this.showDistrictList=res.result[0];
          }else{
            this.$message.show('error',res.message);
          }
        }).fail(()=>{
          alert('网络错误')
        });

        // 选择当前添加active
        this.showCityList.map(a => a.selected = false);
        this.showCityList[index].selected = true;
      },
      citySelected: function () {
        if(!this.showCityList){
          getchildren(this.province).then((res)=>{
            if(res.status==0){
             this.showCityList=res.result[0];
            }else{
              this.$message.show('error',res.message);
            }
          }).fail(()=>{
            alert('网络错误')
          });
        }
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;
      },
      getDistrictId: function (code, input, index) {
        this.district = code;
        this.District = input;
        // 选择当前添加active
        this.showDistrictList.map(a => a.selected = false);
        this.showDistrictList[index].selected = true;
        // 选取市区选项之后关闭弹层
        this.commit();
      },
      districtSelected: function () {
        if(!this.showDistrictList){
          getchildren(this.city).then((res)=>{
            if(res.status==0){
              this.showDistrictList=res.result[0];
            }else{
              this.$message.show('error',res.message);
            }
          }).fail(()=>{
            alert('网络错误')
          });
        }
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
      },
      _selectProvince(val){
        selectAddress().then((res)=>{
          if(res.status==0){
            this.info=res.result[0];
            this.showChose=val;//打开地址选择器

          }else{
            this.$message.show('error','asdasd');
          }
        }).fail(()=>{
          alert('网络错误')
        });
      }

    },
    watch:{
      showchose(val){
        if(val){
          this._selectProvince(val);
        }
      },
      showChose(val){
         this.$emit('showaddress',val)
      }
    }
  }
</script>

<style scoped>
  .myAddress {

  }

  .myAddress .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  }
  .myAddress .btnlist{
     padding:10px;
     display:flex;
     flex-direction:row;
     justify-content: space-between;
     border-bottom:dashed 1px #eeeeee;
     align-items: center;
  }
  .myAddress .cont span {
    display: inline-block;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.88rem;
    margin-left: 0.32rem;
  }

  .myAddress .cont section {
    float: left;
  }

  .myAddress .cont p {
    display: inline-block;
    font-size: 0.28rem;
    color: #333333;
    line-height: 0.88rem;
    margin-left: 1rem;
  }


  .myAddress .showChose {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 120;
    background:rgba(0,0,0,0.5);
  }

  .myAddress .address {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 121;
    background: #fff;
    width: 100%;
  }
  .myAddress .btnlist>.title{
    color:green;
  }
  .myAddress .title h4 {
    display: inline-block;
    margin-left: 3.2rem;
    font-size: 0.32rem;
    line-height: 0.88rem;
    font-weight: normal;
    color: #999;
  }

  .myAddress .title span {

  }

  .myAddress .area {
    display: inline-block;
    font-size: 0.34rem;
    line-height: 0.88rem;
    margin-left: 0.42rem;
    color: #333;
  }

  .myAddress .addList {
    width: 100%;
    font-size: 0.34rem;
    line-height: 0.88rem;
    color: #333;
  }

  /* 修改的格式 */
  .myAddress .address ul {
    width: 100%;
    height:6rem;
    overflow: auto;
    overflow-x: hidden;
  }

  .myAddress .address ul li {
    margin-left: 5%;
  }

  .myAddress .address .title .active {
    color: green;
    border-bottom: 0.02rem solid green;
  }

  .myAddress .address ul .active {
    color: green;
  }

</style>
