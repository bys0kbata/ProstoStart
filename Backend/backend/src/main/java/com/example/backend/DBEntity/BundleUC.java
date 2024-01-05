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
    @ManyToOne
    @JoinColumn(name="id_User")
    private User id_User;
    @ManyToOne
    @JoinColumn(name="id_Comand")
    private Command id_Command;
    @Column(name="Status_Bundle")
    private String Status_Bundle;
}
