package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table4;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table4 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table4Repository extends JpaRepository<Table4, Long> {}
