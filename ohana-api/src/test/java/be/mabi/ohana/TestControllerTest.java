package be.mabi.ohana;

import org.junit.Test;
import org.mockito.InjectMocks;

import static be.mabi.ohana.ObjectMapperFactory.json;
import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TestControllerTest extends OhanaResourceTest {

    @InjectMocks
    private TestController testController;


    //TODO: add more mocking here?
    @Test
    public void helloWorld() throws Exception {
        String result = perform(get("/api/helloworld"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        assertThat(json(result, String.class)).isEqualTo("Hello World!");
    }

    @Override
    protected Object getResourceUnderTest() {
        return testController;
    }
}
