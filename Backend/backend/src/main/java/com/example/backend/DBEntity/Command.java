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
    private int idComand;
    @Column(name = "name_command")
    private String nameComand;
    @Column(name="about_command")
    private String AboutComand;
}
