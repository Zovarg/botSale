<template>
  <div class="v-select">
    <div class="select-main" @click="areOptionsVisible=!areOptionsVisible">
      <div
          class="title"
      >
        {{getSelected}}
      </div>
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
  name: "mainDropDown",
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

  computed: {
    getSelected() {
      let obj = this.options.find(o => o.value === this.selected)
      if (obj) return obj.name
      else return this.selected
    },
  }
}
</script>

<style scoped>
.title{
  cursor: pointer;
}
.v-select{

}
.options{
  top:10px;
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