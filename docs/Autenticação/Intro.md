# Intro 

## Autenticação com Json Web Token 

O sistema implementa autenticação baseada em JSON Web Tokens (JWT) para proteger rotas sensíveis, como a exportação de votos. Essa abordagem fornece uma maneira segura e escalável de validar usuários autenticados, utilizando tokens assinados ao invés de sessões tradicionais.

A autenticação é integrada por meio do Django REST Framework (DRF) e do pacote **djangorestframework-simplejwt**, que oferece endpoints prontos para geração e renovação de tokens.

O djangorestframework-simplejwt pode ser instalado via **pip** com ````pip install djangorestframework-simplejwt```. 

# Configurações 

No arquvio ```settings.py``` foi adicionado:

``````python
# JWT settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# JWT settings for Simple JWT
SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": ("Bearer",),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}
``````

Para configuração do JWT e definição de duração do Token. 

Já no ````INSTALLED_APPS```` foi adicionado: 


``````python

INSTALLED_APPS = [
    '...',
    'rest_framework_simplejwt',
    'rest_framework',
]
``````

E por fim a biblioteca **from datetime import timedelta**


No arquivo ```urls.py```, foram adicionadas as seguintes rotas responsáveis pelo gerenciamento dos tokens:

````python
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Geração de token (login)
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Renovação do token
]
````

**Segue o exemplo de request:**

````json
{
  "username": "usuario_teste",
  "password": "senha_segura"
}

````

**Responde**

````json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOi...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOi..."
}
````

# Protegendo Views com Autenticação JWT


A view que realiza a exportação do excel é protegida, não permitindo o acesso a mesma. 

````python
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def exportar_votos_para_excel(request):
    ...
````

>> Apenas requisições com um token de acesso válido poderão acessar essa view. 

