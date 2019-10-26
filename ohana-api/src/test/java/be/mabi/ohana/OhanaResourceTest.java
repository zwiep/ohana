package be.mabi.ohana;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

public abstract class OhanaResourceTest extends ResourceTest {

    @Override
    protected List<Object> getControllerAdvice() {
        return newArrayList();
    }

    protected String fixture(String resource) throws Exception {
        return Files.readString(Paths.get(getClass().getResource(resource).toURI()));
    }
}
