package com.example.backend.Repository;

import com.example.backend.DBEntity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value = "SELECT * FROM users WHERE users.user_login = :user_login AND users.user_password = :user_password", nativeQuery = true)
    List<User> findByNameAndPassword(@Param("user_login") String user_login,@Param("user_password") String user_password);

    @Modifying
    @Transactional
    @Query(value="UPDATE users SET user_patronic = :user_patronic, user_surname = :user_surname, user_name = :user_name, user_login = :user_login, user_about = :user_about, user_password = :user_password, user_messager = :user_messager WHERE id_user = :id_user", nativeQuery = true)
    void Change(@Param("user_patronic") String user_patronic, @Param("user_surname") String user_surname, @Param("user_name") String user_name, @Param("user_login") String user_login, @Param("id_user") long id_user,@Param("user_password") String user_password,@Param("user_about") String user_about,@Param("user_messager") String user_messager);
}
