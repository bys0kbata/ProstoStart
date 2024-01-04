package com.example.backend.Repository;

import com.example.backend.DBEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value = "SELECT * FROM users WHERE users.user_name = :name AND users.user_password = :password", nativeQuery = true)
    List<User> findByNameAndPassword(@Param("name") String name,@Param("password") String password);
}
