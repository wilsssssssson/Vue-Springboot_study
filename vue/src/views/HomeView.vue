<template>
  <div style="height: 100%">
    <el-container style="height: 100%;">
  <el-aside :width="collapse_window+'px'" style="background-color: rgb(238, 241, 246);min-height: 100vh;">
    <el-menu :default-openeds="['1', '3']" style="min-height: 100%;overflow-x: hidden;" 
    :collapse-transition="false"
    :collapse="isCollapse"
    >
      <div style="height: 60px;line-height:60px;text-align : center;border-top: 20px;">
        <img src=".././assets/book.png" style="position: relative;top:4px; left: -2px; height: 20px;">
        <b v-show="isvisible">后台管理系统</b></div>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i><span slot="title">导航一</span></template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i><span slot="title">导航二</span></template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i><span slot="title">导航三</span></template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header>
      <div v-show="isvisible" style="position:relative;float: left;text-align: center;" >
        <span :class="collapseButtonin" style="cursor:pointer" @click="collapse"></span>
      </div>
      <div v-show="!isvisible" style="position:relative;float: left;text-align: center;">
        <span :class="collapseButtonout" style="cursor:pointer" @click="collapse"></span>
      </div>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main style="height: 100%">
      <div style="padding:10px">
        <el-input style="width: 200px;height: 15px;" placeholder="点击输入"  suffix-icon="el-icon-search">
        </el-input><el-button style="margin-left: 5px;" type="primary">搜索</el-button>
      </div>

      <div style="margin: 10px 0; ">
      <el-button type="primary" :size="buttonSize">新增<i class="el-icon-folder-add"></i></el-button>
      <el-button type="danger" :size="buttonSize">删除<i class="el-icon-folder-delete"></i></el-button>
      <el-button type="primary" :size="buttonSize">导入<i class="el-icon-bottom"></i></el-button>
      <el-button type="primary" :size="buttonSize">导出<i class="el-icon-top"></i></el-button>
      </div>
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="primary" :size="buttonSize">编辑<i class="el-icon-edit"></i></el-button>
            <el-button type="danger" :size="buttonSize">删除<i class="el-icon-circle-close"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="padding:10px">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Collapse } from 'element-ui';

export default {
  name: 'HomeView',
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return{
        tableData: Array(10).fill(item),
        collapseButtonin: 'el-icon-s-fold',
        collapseButtonout: 'el-icon-s-unfold',
        isCollapse:false,
        collapse_window:200,
        isvisible:true,
        buttonSize:'mini'
      };
  },
  methods:{
    collapse(){
      this.isCollapse=!this.isCollapse;
      this.isvisible=!this.isvisible;
      if(this.isCollapse){
        this.collapse_window=64
      }else{
        this.collapse_window=200
      }
     
    }
  }
}
</script>

<style>
.el-header{
  text-align: right;
  font-size: 12px ;
  border-bottom: 1px solid #eee;
  line-height: 60px;
}
</style>
