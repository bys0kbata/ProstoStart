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
@Table(name="BundleUC")
@AllArgsConstructor
public class BundleUC implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_Bundle")
    private int id_Bundle;
    @Column(name="name_Part")
    private String name_Part;
    @Column(name="surname_Part")
    private String surname_Part;
    @Column(name="role_Part")
    private String role_Part;
    @ManyToOne
    @JoinColumn(name="id_Comand")
    private Command id_CommandCR;
}
