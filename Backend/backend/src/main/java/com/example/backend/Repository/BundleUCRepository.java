package com.example.backend.Repository;

import com.example.backend.DBEntity.BundleUC;
import com.example.backend.DBEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BundleUCRepository extends JpaRepository<BundleUC,Long> {
}
