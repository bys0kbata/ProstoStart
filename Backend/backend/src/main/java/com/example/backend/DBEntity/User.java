package com.example.backend.DBEntity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user")
    public int id_user;
    @Column(name = "user_name")
    public String user_name;
    @Column(name = "user_surname")
    public String user_surname;
    @Column(name = "user_patronic")
    public String user_patronic;
    @Column(name = "user_login")
    public String user_login;
    @Column(name = "user_password")
    public String user_password;
    @Column(name = "user_about")
    public String user_about;
    @Column(name = "user_messager")
    public String user_messeger;

}
