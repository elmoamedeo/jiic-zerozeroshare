package br.com.cesusc.zerozeroshare.repository;

import br.com.cesusc.zerozeroshare.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
