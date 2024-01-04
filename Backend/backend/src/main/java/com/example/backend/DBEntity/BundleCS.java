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
@Table(name = "BundleCS")
@NoArgsConstructor
@AllArgsConstructor
public class BundleCS implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_Bundle")
    private int idBundle;

    @ManyToOne
    @JoinColumn(name="id_Start")
    private Start idStart;

    @ManyToOne
    @JoinColumn(name="id_Comand")
    private Command idCommand;

    @Column(name="Status_Bundle")
    private String StatusBundle;
}
