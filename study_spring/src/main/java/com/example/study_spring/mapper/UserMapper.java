package com.example.study_spring.mapper;

import com.example.study_spring.entity.User;
import org.apache.ibatis.annotations.*;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;


@Mapper
public interface UserMapper {


    @Select("select * from sys_user")
    List<User> findAll();
    @Insert("INSERT into sys_user(user_name, password, nickname, email, phone, address) VALUES (#{user_name}, #{password}, #{nickname},#{email},#{phone},#{address})")
    int insert(User user);

    int update(User user);

    Integer deleteById(@Param("id") Integer id);
}
