package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Table5;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Table5 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface Table5Repository extends JpaRepository<Table5, Long> {}
