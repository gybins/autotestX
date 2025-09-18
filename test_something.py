import pytest

@pytest.fixture(scope="session")
def browser():
    print("Браузер")
    pass
    yield
    print(" Закртываемся")
@pytest.fixture
def login_page(browser):
    print("логин пайдж")
    pass

@pytest.fixture
def user():
    print("Юзер")
    return "username", "password"

def test_login(login_page, user):
    username,password = user
    assert username == "username"
    assert password == "password"