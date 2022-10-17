<template>
  <div class="v-select">
    <div :class="'select-main defaultColor'" :style="{backgroundColor: getSelected.color, color: getSelected.text}" @click="areOptionsVisible=!areOptionsVisible">
      <div
          class="title" :style="{color: getSelected.text}"
      >
        {{getSelected.name}}
      </div>
      <div class="icon-select">
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.33887 1L7.30084 7L13.2628 1" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="options" v-if="areOptionsVisible" v-on-clickaway="closeSelect">
        <div

            class="options__element"
            v-for="option in options"
            :key="option.name"
            @click="selectOption(option)"
        >
          <div class="defaultColor" :style="{backgroundColor: option.color, color: option.text}">{{option.name}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
  name: "dropDownProgress",
  directives: {
    onClickaway: onClickaway,
  },
  props:{
    status:{

    },
    options:{
      type:Array,
      default(){
        return []
      }
    },
    selected:{
      type: Number,
      default:0
    }
  },
  data(){
    return {
      areOptionsVisible:false,
      userIds: [],
      statuses: [
        {},
        {},
        {},
        {},
        {},
      ]
    }
  },
  computed: {
    getSelected () {
      let obj = this.options.find(o => o.id === this.selected)
      if (obj) return obj
      else return {
        name: this.selected,
        id: '',
        color: 'rgb(0, 255, 0)',
      }
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select-deal',option)
      this.areOptionsVisible=false;
    },
    hideSelect(){
      this.areOptionsVisible=false;
    },
    closeSelect(){
      this.areOptionsVisible=false;
    }
  },

}
</script>

<style scoped>
.v-select{
  cursor: pointer;
  position: relative;
  min-height: 43px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
}
.select-main{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  border-radius: 20px;
}
.title{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.1px;

  color: black;
  padding: 5px;
}

.v-select p{
  margin: 0;
}
.icon-select{
  padding-right: 15px;
}
.options{
  font-family: 'Montserrat';
  background-color: white;
  position: absolute;
  z-index: 100;
  top:0;
  right: 0;
  width: 100%;
}

.blue{
  background-color:#99ccff ;
  padding: 10px 0 10px 10px;
}
.yellow{
  background-color: #ffff99;
  padding: 10px 0 10px 10px;
}
.orange{
  background-color: #ffcc66;
  padding: 10px 0 10px 10px;
}
.pink{
  background-color: #ffcccc;
  padding: 10px 0 10px 10px;
}
.green{
  background-color: #CCFF66;
  padding: 10px 0 10px 10px;
}
.defaultColor{
  padding: 10px 0 10px 10px;

}

.options input{
  margin:10px;
  border:0 !important;
  border-radius: 10px;
  outline: none !important;
  margin-top: 20px;
  width: 94%!important;
}
.options input::placeholder{

}
.options .overflow div{
  font-family: 'Montserrat';
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  padding-top:10px;
  padding-bottom:10px;
  text-align: center;
  border-bottom: 1px solid #C7C7C7;
  width: 80%;
  margin: 0 auto;
}

.options__element{
  cursor: pointer
}

.options__element:hover{
  opacity: 0.9;
}
options__element_active{
  background-color: #02943C;
  color: white;
}

@media screen and (max-width: 500px) {

  .v-select{
    width: auto;
    height: auto;
  }
  .icon-select{
    margin: 0;
  }

}
@media screen and (max-width: 400px) {
  .options .overflow div{
    width: 90%;

  }
}

</style>