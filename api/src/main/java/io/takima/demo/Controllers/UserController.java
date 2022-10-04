package io.takima.demo.Controllers;

import io.takima.demo.Entities.User;
import io.takima.demo.DAO.UserDAO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserDAO userDAO;

    public UserController(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @GetMapping()
    public Iterable<User> getUsers() {
        return userDAO.findAll();
    }

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return this.userDAO.save(user);
    }


}
