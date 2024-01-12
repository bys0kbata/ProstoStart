package com.example.backend.Repository;

import com.example.backend.DBEntity.Command;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository

public interface CommandRepository extends JpaRepository<Command,Long> {

    @Query(value="UPDATE command SET name_command = :name_Comand, about_command = :about_Comand, exp_command = :exp_Comand, contact_command = :contact_Comand, link_command = :link_Comand WHERE id_command = :id_Comand", nativeQuery = true)
    void Change(@Param("name_Comand") String name_Comand,@Param("about_Comand") String About_Comand,@Param("exp_Comand") String Exp_Comand,@Param("contact_Comand") String Contact_Comand,@Param("link_Comand") String Link_Comand,@Param("id_Comand") long id_Comand);
}
