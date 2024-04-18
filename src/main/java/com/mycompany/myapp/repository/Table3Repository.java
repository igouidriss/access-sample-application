package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table3;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table3 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table3Repository extends JpaRepository<Table3, Long> {}
