package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table2;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table2 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table2Repository extends JpaRepository<Table2, Long> {}
