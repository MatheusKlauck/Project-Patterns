/**
 * "Abstract factory" 
 *  - Quero que todos os produtos (Repositorios) tenham as seguintes assinaturas
 */
interface IRepository {
    create();
    read();
    update();
    delete();
}