package com.example.backend.Repository;

import com.example.backend.DBEntity.BundleCS;
import com.example.backend.DBEntity.Command;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface BundleCSRepository extends JpaRepository<BundleCS,Long> {
    @Query(value="UPDATE bundlecs SET  status_bundle = :status_bundle  WHERE id_bundle = :id_bundle", nativeQuery = true)
    void Change(@Param("status_bundle") String 	status_bundle, @Param("id_bundle") long id_bundle);
    @Query(value = "SELECT * FROM bundlecs WHERE id_start = :id_start", nativeQuery = true)
    List<BundleCS> findByIDStart(@Param("id_start") long id_start);

}
