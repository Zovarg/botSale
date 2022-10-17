<template>
  <div class="v-select">
    <div class="select-main" @click="areOptionsVisible=!areOptionsVisible">
      <button type="button">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="9" fill="#39E2A5"></circle>
          <path d="M5 11.2995V13H6.72268L11.6297 8.10467L9.90701 6.40419L5 11.2995ZM12.8825 6.7649C13.0392 6.61031 13.0392 6.30113 12.8825 6.14654L11.8385 5.11594C11.6819 4.96135 11.3687 4.96135 11.2121 5.11594L10.429 5.88889L12.1517 7.58937L12.8825 6.7649Z" fill="white"></path>
        </svg>
        Выполнить действие</button>
        <div class="icon-drop"></div>
    </div>
    <div class="options" v-if="areOptionsVisible" v-on-clickaway="closeSelect">
      <div

          class="options__element"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </div>
    </div>
  </div>
</template>

<script>

import { directive as onClickaway } from 'vue-clickaway';
export default {
  name: "ActionDropDown",
  directives: {
    onClickaway: onClickaway,
  },
  props:{
    options:{
      type:Array,
      default(){
        return []
      }
    },
    selected:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      areOptionsVisible:false,
      userIds: []
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select-opt',option)
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
  position: relative;
}
.select-main{
  position: relative;
}
.v-select .select-main button{
  display: flex;
  align-items: center;
  position: relative;
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  line-height: 20px;
  padding: 7px 13px 5px 13px;
  margin-bottom: 9px;
  cursor: pointer;
  gap: 10px;
  width: 100%;
}
.icon-drop{
  position: absolute;
  top: 17px;
  right: 9px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 4.5px 0 4.5px;
  border-color: #bcbcbc transparent transparent transparent;
}
.v-select{

}
.options{

  top:0;
  position: absolute;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction:column ;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
}
.options div{
  cursor: pointer;
  white-space: nowrap;
  padding: 0 15px;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  height: 34px;
  overflow: hidden;
  width: 100%;
  color:black;
}
.options div:hover{
  background-color: #bcbcbc;
}
</style>