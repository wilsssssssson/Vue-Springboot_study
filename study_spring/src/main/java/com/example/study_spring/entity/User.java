package com.example.study_spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@NoArgsConstructor//创建无参构造
//@AllArgsConstructor//创建有参构造
@Data
public class User {
    private Integer id;
    private String user_name;
    private String password;
    private String nickname;
    private String email;
    private String phone;
    private String address;

}
