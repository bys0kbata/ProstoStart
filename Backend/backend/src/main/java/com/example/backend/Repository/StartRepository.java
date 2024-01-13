package com.example.backend.Repository;

import com.example.backend.DBEntity.Start;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StartRepository extends JpaRepository<Start,Long> {

    @Query(value="UPDATE start SET name_start = :name_start, about_start = :about_start  WHERE id_start = :id_start", nativeQuery = true)
    void Change(@Param("name_start") String name_start, @Param("about_start") String about_start, @Param("id_start") long id_start);
}
