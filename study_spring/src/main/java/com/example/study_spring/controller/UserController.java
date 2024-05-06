package com.example.study_spring.controller;

import com.example.study_spring.entity.User;
import com.example.study_spring.mapper.UserMapper;
import com.example.study_spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserService userService;

    @PostMapping//插入
    public Integer save(@RequestBody User user){
        return userService.save(user);
    }
    @GetMapping//查询
    public List<User> index(){

        return userMapper.findAll();
    }

    @DeleteMapping("/{id}")//删除
    public Integer delete(@PathVariable Integer id){
        return userMapper.deleteById(id);
    }


}
