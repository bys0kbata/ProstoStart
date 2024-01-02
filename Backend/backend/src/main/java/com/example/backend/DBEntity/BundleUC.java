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
@Table(name="BundleUC")
@AllArgsConstructor
public class BundleUC implements Serializable {
    @Id
    @Column(name="id_Bundle")
    private int idBundle;
    @Column(name="id_User")
    private int idUser;
    @Column(name="id_Comand")
    private int idCommand;
    @Column(name="Status_Bundle")
    private String StatusBundle;
}
