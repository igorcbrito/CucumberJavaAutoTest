package StepDefinitions;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;

import io.cucumber.java.en.*;

public class GmailLoginSteps {

	WebDriver driver = null;
	
	@Given("browser is open")
	public void browser_is_open() {
		
		System.out.println("Inside Step - browser is open");
		
		String projectPath = System.getProperty("user.dir");
		System.out.println("Project path is : "+projectPath);
		
		System.setProperty("webdriver.chrome.driver", projectPath+"/src/test/resources/drivers/chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		//driver.manage().window().maximize();
	}

	@And("user is on login page")
	public void user_is_on_login_page() {
			
		driver.navigate().to("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
	}
		

	@When("^user enters (.*) and (.*)$")
	public void user_enters_username_and_password(String username, String password) throws InterruptedException {
		
		driver.findElement(By.id("identifierId")).sendKeys(username);
		driver.findElement(By.cssSelector("button[jscontroller='soHxf']")).click();
		
		Thread.sleep(2000);
		
		driver.findElement(By.name("password")).sendKeys(password);
		
	}
	
	@And("user clicks on login")
	public void user_clicks_on_login() throws InterruptedException {
		
		driver.findElement(By.cssSelector("button[jscontroller='soHxf']")).click();
		
		Thread.sleep(2000);
	}
	
	Boolean result = null;

	@Then("user is navigated to the home page")
	public void user_is_navigated_to_the_home_page() throws InterruptedException {
		

		try{
			
			result = driver.findElement(By.cssSelector("input[placeholder='Pesquisar e-mail']")).isDisplayed();
			System.out.println("Login realizado com sucesso!");
			
		}
		
		catch (Exception e){
			
			System.out.println("Usuário ou senha incorretos!");
		}
		
		
		
		
		//Assert.assertTrue("Usuário ou senha incorretos!", result);
		
		result = null;
		//driver.findElement(By.xpath("//*[text()='Senha incorreta. Tente novamente ou clique em \"Esqueceu a senha?\" para redefini-la.']")).isDisplayed()
		//System.out.println("Usuário ou senha incorretos!");
			
		
		Thread.sleep(2000);
		
		driver.close();
		driver.quit();
	}
}
