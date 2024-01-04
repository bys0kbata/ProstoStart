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
    private int idBundle;
    @ManyToOne
    @JoinColumn(name="id_User")
    private User idUser;
    @ManyToOne
    @JoinColumn(name="id_Comand")
    private Command idCommand;
    @Column(name="Status_Bundle")
    private String StatusBundle;
}
