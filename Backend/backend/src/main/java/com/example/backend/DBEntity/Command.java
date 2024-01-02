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

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Command")
public class Command implements Serializable {
    @Id
   @Column(name="id_command")
    private int idComand;
    @Column(name = "name_command")
    private String nameComand;
    @Column(name="about_command")
    private String AboutComand;
}
