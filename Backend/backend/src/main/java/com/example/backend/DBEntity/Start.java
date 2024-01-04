package com.example.backend.DBEntity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Entity
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Start")
public class Start implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_start")
    private int idStart;
    @Column(name = "name_start")
    private String NameStart;
    @Column(name = "about_start")
    private String AboutStart;
    @Column(name = "creater_start")
    private String CreaterStart;

}
