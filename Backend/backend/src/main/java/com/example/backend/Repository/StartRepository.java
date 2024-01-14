package com.example.backend.Repository;

import com.example.backend.DBEntity.Start;
import com.example.backend.DBEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StartRepository extends JpaRepository<Start,Long> {

    @Query(value="UPDATE start SET name_start = :name_start, about_start = :about_start  WHERE id_start = :id_start", nativeQuery = true)
    void Change(@Param("name_start") String name_start, @Param("about_start") String about_start, @Param("id_start") long id_start);
    @Query(value = "SELECT * FROM start WHERE id_creatst = :id_user", nativeQuery = true)
    List<Start> findByIDStart(@Param("id_user") long id_user);


}
