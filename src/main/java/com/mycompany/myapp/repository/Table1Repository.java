package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table1;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table1 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table1Repository extends JpaRepository<Table1, Long> {}
