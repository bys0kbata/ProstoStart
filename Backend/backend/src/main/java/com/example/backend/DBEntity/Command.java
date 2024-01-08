package com.example.backend.DBEntity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Command")
public class Command implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name="id_command")
    private int id_Comand;
    @Column(name = "name_command")
    private String name_Comand;
    @Column(name="about_command")
    private String About_Comand;
    @Column(name="exp_command")
    private String Exp_Comand;
    @Column(name="contact_command")
    private String Contact_Comand;
    @Column(name="link_command")
    private String Link_Comand;
}
