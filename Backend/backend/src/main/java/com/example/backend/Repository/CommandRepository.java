package com.example.backend.Repository;

import com.example.backend.DBEntity.Command;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface CommandRepository extends JpaRepository<Command,Long> {
}
