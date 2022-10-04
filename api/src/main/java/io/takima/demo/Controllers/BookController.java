package io.takima.demo.Controllers;

import io.takima.demo.Entities.Book;
import io.takima.demo.Services.BookService;
import io.takima.demo.security.FirebaseAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
@CrossOrigin
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }


    @GetMapping()
    public Iterable<Book> listBooks() {
        return this.bookService.listBooks();
    }

    @PostMapping("/user/borrow/{id}")
    public Book borrow(@PathVariable Long id, @AuthenticationPrincipal FirebaseAuthentication user) {
        return this.bookService.borrow(id, user.getUserId());
    }

    @PostMapping("/user/give-back/{id}")
    public Book giveBack(@PathVariable Long id, @AuthenticationPrincipal FirebaseAuthentication user) {
        return this.bookService.giveBack(id, user.getUserId());
    }

}
