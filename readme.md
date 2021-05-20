### Exemplo de teste automatizado utilizando Java, Selenium e Cucumber

O objetivo deste projeto é criar uma prova de conceito com o auxílio das ferramentas Java, Selenium e Cucumber. 
Como alvo, foi solicitado que se criasse um sistema que pudesse fazer login na plataforma do Gmail e verificar se o login é realizado com sucesso. Neste documento serão
demonstrados os principais pontos da implementação, a configuração do projeto e o download das dependências será anexado ao fim do texto.

OBS: Optou-se por não utilizar as versões mais recentes das dependências encontradas no https://search.maven.org/ por conta de incompatibilidades geradas nos relatórios de erros. 
As versões das dependências utilizadas seguem o formato da imagem a seguir: 

![image](https://user-images.githubusercontent.com/37213793/119049927-8a836800-b997-11eb-90cb-a3b208376e51.png)


#### Cucumber
A ferramenta possibilitou a criação de cenários no formato BDD de forma bem clara e definida. 
Foi necessário criar um diretório Feature e um arquivo .feature destinado à declaração de cenários e palavras chaves, além de parâmetros para testes.
Para a utilização de usuário e senha parametrizáveis, foi utilizado o Scenario Outline.

Abaixo é possível visualizar a declaração do cenário, as cinco palavras chaves em linguagem natural e também os parâmetros de login passados como exemplo:
~~~
# Author: Igor Carvalho de Brito Batista
Feature: Test login functionality (Gmail)

  Scenario Outline: Check login is successful with valid username and password
    Given browser is open
    And user is on login page
    When user enters <username> and <password>
    And user clicks on login
    Then user is navigated to the home page

    Examples: 
      | username          | password  |
      | testedesafio.igor | 1234@4321 |
      | testedesafio.igor |  12365446 |

~~~
#### Relatórios de testes
No diretório src/test/java/StepDefinitions existe um arquivo chamado TestRunner.java, nele é possível apontar o
arquivo .feature que guiará os testes em alto nível. Além disso, no arquivo é possível definir os modelos de relatórios que 
ao final dos testes. 

No trecho de código abaixo é possível ver a declaração dos relatórios em .xml, .json e .html que serão gerados ao final dos testes:
~~~
package StepDefinitions;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/GmailLogin.feature", glue= {"StepDefinitions"},
monochrome = true,
plugin = {"pretty", "junit:target/JUnitReports/report.xml",
		"json:target/JSONRports/report.json",
		"html:target/HtmlReports"}
		)
public class TestRunner {

}
~~~ 

#### Implementação dos passos
Para cada uma das palavras chaves declaradas com o Cucumber, foi necessário implementar a execução passo a passo da execução
dos testes.

Abaixo está um exemplo de um trecho de código que navega até o site de login do Gmail e em seguida utiliza três tipos de 
identificadores para escrever o nome de usuário e senha parametrizados e também clicar no botão "Próximo" do site.

OBS: A implementação completa está no diretório src/test/java/StepDefinitions/GmailLoginSteps.java .

~~~

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

~~~ 

Na tag @When, os trechos descritos como (.*) representam o usuário e senha parametrizáveis. Estes parâmetros são passados através 
dos exemplos presentes no arquivo feature do Cucumber.


#### Resultado
Para validar o login no site do Gmail, foi utilizada uma estrutura de Try e Catch. No Try é procurado por um elemento único da página
que satisfaça a pré condição de estar logado no Gmail. Para fazer essa validação foi utilizada a barra de pesquisa de e-mails.

Ao ser lançada uma exceção, é executada uma mensagem de usuário e senha incorretos no escopo do Catch. Vale destacar que 
existe um tempo em que o sistema aguarda pelo elemento utilizado para validação na página e só em seguida a mensagem de usuário e senha incorretos 
é exibida no sistema.

~~~

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
	
		
		result = null;
			
		
		Thread.sleep(2000);
		
		driver.close();
		driver.quit();
	}

~~~ 


![image](https://user-images.githubusercontent.com/37213793/119055500-85c2b200-b99f-11eb-8a43-0d5094208406.png)


#### Referências
Para toda a configuração do projeto e também alguns passos de implementação foi seguido os tutoriais do canal Automation Step by Step - Raghav Pal.

<a href="https://www.youtube.com/watch?v=4e9vhX7ZuCw&ab_channel=AutomationStepbyStep-RaghavPal" title="Clicando aqui é possível ter acesso ao primeiro vídeo.">Automation Step by Step - Raghav Pal</a>



