package br.com.cesusc.zerozeroshare.repository;

import br.com.cesusc.zerozeroshare.domain.Job;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Job entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobRepository extends JpaRepository<Job, Long> {}
