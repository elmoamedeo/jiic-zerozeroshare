package br.com.cesusc.zerozeroshare.service.mapper;

import br.com.cesusc.zerozeroshare.domain.Job;
import br.com.cesusc.zerozeroshare.service.dto.JobDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Job} and its DTO {@link JobDTO}.
 */
@Mapper(componentModel = "spring")
public interface JobMapper extends EntityMapper<JobDTO, Job> {}
