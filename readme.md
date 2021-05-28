### Exemplo de teste automatizado utilizando Java, Selenium e Cucumber

O objetivo deste projeto é criar uma prova de conceito com o auxílio das ferramentas Java, Selenium e Cucumber. 

Para este projeto foi utilizada a seguinte versão do Java no Windows:
![image](https://user-images.githubusercontent.com/37213793/119924081-51c03180-bf49-11eb-9859-2c881401d4a9.png)

Como alvo, foi solicitado que se criasse um sistema que pudesse fazer login na plataforma do Gmail e verificar se o login é realizado com sucesso. Neste documento serão
demonstrados os principais pontos da implementação, a configuração do projeto e o download das dependências será anexado ao fim do texto.

As versões das dependências e plugins utilizados seguem o código a seguir: 

~~~
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>CucumberJava</groupId>
	<artifactId>CucumberJava</artifactId>
	<version>0.0.1-SNAPSHOT</version>

	<build>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-surefire-plugin</artifactId>
				<version>2.19.1</version>
				<configuration>
					<testFailureIgnore>true</testFailureIgnore>
				</configuration>
			</plugin>
		</plugins>
	</build>

	<dependencies>

		<!-- https://mvnrepository.com/artifact/io.cucumber/cucumber-java -->
		<dependency>
			<groupId>io.cucumber</groupId>
			<artifactId>cucumber-java</artifactId>
			<version>6.10.4</version>
		</dependency>


		<!-- https://mvnrepository.com/artifact/junit/junit -->
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.13.2</version>
			<scope>test</scope>
		</dependency>

		<!-- https://mvnrepository.com/artifact/io.cucumber/cucumber-junit -->
		<dependency>
			<groupId>io.cucumber</groupId>
			<artifactId>cucumber-junit</artifactId>
			<version>6.10.4</version>
			<scope>test</scope>
		</dependency>


		<!-- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java -->
		<dependency>
			<groupId>org.seleniumhq.selenium</groupId>
			<artifactId>selenium-java</artifactId>
			<version>4.0.0-beta-3</version>
		</dependency>

		<dependency>
			<groupId>org.apache.httpcomponents</groupId>
			<artifactId>httpclient</artifactId>
			<version>4.5.10</version>
		</dependency>

	</dependencies>
</project>

~~~ 
### Maven
Para executar o projeto é necessário instalar as dependências do Maven no Windows.

Link para download: https://maven.apache.org/download.cgi (Utilizada a versão 3.8.1, arquivo .zip)

Após baixada e extraídas as dependências do Maven, é necessário adicionar o caminho do diretório na variável Path no sistema. Para isso basta ir até Sistema > 
Configurações avançadas do sistema > Variáveis de ambiente...
Em seguida ir até a variável de sistema Path e editar. Crie um novo caminho para o diretório da basta bin da sua dependência do Maven.
![image](https://user-images.githubusercontent.com/37213793/119924540-2853d580-bf4a-11eb-861e-5ea4dc7faee2.png)


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

#### Para executar os testes 

Basta acessar o arquivo GmailLogin.feature na imagem a seguir, clicar com o botão direito > Run As > Cucumber Feature.

![image](https://user-images.githubusercontent.com/37213793/119058317-86aa1280-b9a4-11eb-93e8-c61ffea3395e.png)

Usuário e senha temporários do Gmail:

testedesafio.igor / 1234@4321

Também foi utilizada uma senha errada para demonstrar o funcionamento do cenário quando o acesso não pode ser validado. O mesmo caso de teste poderia ser demonstrado utilizando outro Scenario Outline.


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



