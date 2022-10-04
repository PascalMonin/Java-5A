package io.takima.demo.DAO;

import io.takima.demo.Entities.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface BookDAO extends CrudRepository<Book, Long> {

}
