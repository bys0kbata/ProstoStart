package com.example.backend.DBEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    @Column(name = "id_user")
    public long iduser;
    @Column(name = "user_name")
    public String name;
    @Column(name = "user_password")
    public String password;


}
