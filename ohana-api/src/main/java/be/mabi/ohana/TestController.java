package be.mabi.ohana;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping(path="/api")
public class TestController {

    @GetMapping(path="/helloworld")
    public String helloWorld() {
        return "Hello World!";
    }
}
